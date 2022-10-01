import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import MyLabTestCard from "../components/MyLabTestCard.js"
import axiosInstance from "../utils/axios.js"
import { myLabTests } from "../utils/testData.js"

const MyLabTest = () => {
  const { userId } = useParams()
  console.log(userId)
  const [filters, setFilters] = useState([])

  const [originalTests, setOriginalTests] = useState([])
  const [variableTests, setVariableTests] = useState([])
  const [filterLoading, setFilterLoading] = useState(false)
  const [filterStates, setFilterStates] = useState({})
  const [searchTerm, setSearchTerm] = useState("")

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  useEffect(() => {
    const getMyTest = async () => {
      try {
        const res = await axiosInstance.get(`/rendezvous/${userId}`)
        for (let i = 0; i < res.data.length; i++) {
          let test = await axiosInstance.get(`/test/${res.data[i].testId}`)
          res.data[i] = {
            ...res.data[i],
            name: test.data.name,
            image: test.data.imagePath,
            price: test.data.price,
          }
        }

        setOriginalTests(res.data)
        setVariableTests(res.data)
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
    getMyTest()

    const theFilters = ["booked lab tests", "tested", "results out"]
    setFilters(theFilters)
    let localFilterStates = {}
    theFilters.forEach(filter => (localFilterStates[filter] = false))
    setFilterStates(localFilterStates)
  }, [])

  const handleCheckBoxChange = async e => {
    setSearchTerm("")
    setFilterLoading(true)
    let localFilterStates = filterStates
    localFilterStates[e.target.id] = e.target.checked
    setFilterStates(localFilterStates)
    filterVariableTest()
    setTimeout(() => {
      setFilterLoading(false)
    }, 1000)
  }

  const filterVariableTest = () => {
    // const tagKeys = Object.keys(tagStates);
    // const checkedTags = tagKeys.filter((tagKey) => tagStates[tagKey] === true);
    // console.log("checkedTags", checkedTags);
    // const filteredOriginalTest = originalTests.filter((test) => {
    // 	let match = false;
    // 	test.tags.forEach((tag) => {
    // 		if (checkedTags.includes(tag)) {
    // 			match = true;
    // 		}
    // 	});
    // 	if (match) return true;
    // });
    // if (filteredOriginalTest.length) {
    // 	setVariableTests(filteredOriginalTest);
    // } else {
    // 	setVariableTests(originalTests);
    // }
  }

  const unTickAllCheckBoxes = () => {
    const filterKeys = Object.keys(filterStates)
    const localFilterStates = filterStates
    filterKeys.forEach(filterKey => (localFilterStates[filterKey] = false))
    console.log(localFilterStates)
    setFilterStates(localFilterStates)
  }

  const handleSearchInputChange = text => {
    unTickAllCheckBoxes()
    setSearchTerm(text)
    console.log("variableTests", variableTests)
    const testsCorrespondingToSearch = originalTests.filter(test => {
      console.log("text", text)
      return test.name.toLowerCase().includes(text.toLowerCase())
    })
    console.log("testsCorrespondingToSearch", testsCorrespondingToSearch)
    setVariableTests(testsCorrespondingToSearch)
  }

  const handleEmptySearch = () => {
    setSearchTerm("")
    setVariableTests(originalTests)
  }

  // const navigate = useNavigate();

  // const handleViewDetails = (test) => {
  // 	console.log(test);
  // 	navigate("/lab_test_details", { state: test });
  // };

  return (
    <div className="container">
      {/* for mobile to sm screens */}
      <div className="pt-3">
        <h2 className="text-center  mt-3 d-md-none">My lab tests</h2>
        <div className="d-flex justify-content-evenly m-4 py-lg-3">
          <h2 className="d-none mb-0 d-md-block">My lab tests</h2>
          <div className="input-group w-50">
            <button
              className="btn btn-outline-info"
              type="button"
              id="button-addon2"
              disabled
            >
              <span className="material-symbols-outlined d-flex">search</span>
            </button>
            <input
              // value={searchTerm}
              type="text"
              className="form-control"
              placeholder="search lab test"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              onChange={e => handleSearchInputChange(e.target.value)}
            ></input>
            {searchTerm && (
              <button
                className="btn btn-outline-info"
                type="button"
                id="button-addon2"
                onClick={handleEmptySearch}
              >
                <span className="material-symbols-outlined d-flex">
                  {" "}
                  close{" "}
                </span>
              </button>
            )}
          </div>
          <div className="dropdown-center">
            <button
              type="button"
              className="btn btn-info dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              data-bs-auto-close="outside"
              // data-bs-offset="10,20"
            >
              filter
            </button>
            <ul className="dropdown-menu">
              {filters.map(filter => (
                <li>
                  <div class="dropdown-item">
                    <div className="form-check ">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        checked={filterStates[filter]}
                        onChange={handleCheckBoxChange}
                        value=""
                        id={filter}
                      ></input>
                      <label class="form-check-label" htmlFor={filter}>
                        {filter}
                      </label>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* list of lab test */}
        {filterLoading ? (
          <div className="text-center mt-5 pt-5 text-primary">
            <div class="spinner-grow" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : !variableTests.length ? (
          <p className="fw-bold text-center mt-5 pt-5">
            <span class="material-symbols-outlined ">search_off</span>
            <span className="ms-2">No Match</span>
          </p>
        ) : (
          <div>
            {variableTests.map((test, index) => (
              <MyLabTestCard
                id={test._id}
                name={test.name}
                image={test.image}
                price={test.price}
                state={test.state}
                bookedOn={test.bookedOn}
                doneOn={test.doneOn}
                resultsOutOn={test.resultsOutOn}
                key={index}
                // handleViewDetails={() => handleViewDetails(test)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default MyLabTest
