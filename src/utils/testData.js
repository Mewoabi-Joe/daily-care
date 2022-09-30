import cbc from "../assets/photos/cbc.jpg"
import lft from "../assets/photos/lft.jpg"
import renal from "../assets/photos/renal.jpg"
import tsh from "../assets/photos/tsh.jpg"
import ghono from "../assets/photos/ghono.jpg"
import hiv from "../assets/photos/hiv.webp"
import uri from "../assets/photos/uri.webp"
import covid from "../assets/photos/covid.webp"

export const tests = [
  {
    name: "Complete Blood Count(CBC)",
    description:
      "A blood test used to evaluate your overall health and detect a wide range of disorders, including anemia, infection and leukemia. A complete blood count test measures several components and features of your blood, including: Red blood cells, which carry oxygen",
    image: cbc,
    tags: ["blood test", "screening test"],
    price: 50000,
  },
  {
    name: "liver function tests",
    description:
      "Liver function tests (also known as a liver panel) are blood tests that measure different enzymes, proteins, and other substances made by the liver. These tests check the overall health of your liver.",
    image: lft,
    tags: ["blood test", "liver", "organ function"],
    price: 30000,
  },
  {
    name: "kidney function tests",
    description:
      "Kidney function tests are urine or blood tests that evaluate how well your kidneys are working",
    image: renal,
    tags: ["blood test", "kidney", "organ function", "urine"],
    price: 40000,
  },
  {
    name: "thyroid stimulating hormone(TSH)",
    description:
      "A TSH test is a blood test that measures this hormone. TSH levels that are too high or too low may be a sign of a thyroid problem. The thyroid is a small, butterfly-shaped gland in the front of your neck. Your thyroid makes hormones that control how your body uses energy.",
    image: tsh,
    tags: ["blood test", "thyroid", "hormone"],
    price: 20000,
  },
  {
    name: "HIV AIDs",
    description:
      "Test used to detect the presence of the human immunodeficiency virus, the virus that causes acquired immunodeficiency syndrome, in serum, saliva, or urine. Such tests may detect antibodies, antigens, or RNA",
    image: hiv,
    tags: ["blood test", "STDs"],
    price: 0,
  },
  {
    name: "Gonorrhea",
    description:
      "The test is looking for evidence of the bacterium Neisseria gonorrhoeae, which causes the sexually transmitted disease gonorrhoea. Gonorrhoea is easily treated but can cause severe reproductive and health problems if left untreated",
    image: ghono,
    tags: ["Urine", "STDs"],
    price: 0,
  },
  {
    name: "Urinalysis",
    description:
      "A test of your urine. It's used to detect and manage a wide range of disorders, such as urinary tract infections,Liver issues, kidney disease and diabetes. A urinalysis involves checking the appearance, concentration and content of urine.",
    image: uri,
    tags: ["Urine", "Kidney", "diabetes", "organ function"],
    price: 60000,
  },
  {
    name: "Covid-19",
    description:
      "Viral tests look for a current infection with SARS-CoV-2, the virus that causes COVID-19, by testing specimens from your nose or mouth",
    image: covid,
    tags: ["Nasal", "respiratory", "bacteria", "virus"],
    price: 0,
  },
]

export const users = [
  {
    firstName: "Mewoabi",
    lastName: "Joe",
    email: "leon@gmail.com",
    phoneNo: "677662876",
    dateOfBirth: "30/09/2022",
  },
  {
    firstName: "Nfor",
    lastName: "Gildas",
    email: "gildas@gmail.com",
    phoneNo: "678862876",
    dateOfBirth: "2000-09-24",
  },
  {
    firstName: "Samuel",
    lastName: "Remy",
    email: "samuel@gmail.com",
    phoneNo: "679662876",
    dateOfBirth: "2000-09-24",
  },
  {
    firstName: "James",
    lastName: "Hagrins",
    email: "james@gmail.com",
    phoneNo: "677992876",
    dateOfBirth: "2000-09-24",
  },
]

export const myLabTests = [
  {
    name: "COVID 19",
    image: covid,
    price: 0,
    booked_date: "2022-9-30",
    state: "booked",
  },
  {
    name: "Urinalysis",
    image: uri,
    price: 60000,
    booked_date: "2022-9-13",
    state: "tested",
  },
  {
    name: "liver function tests",
    image: lft,
    price: 30000,
    booked_date: "2022-9-13",
    state: "results",
  },
  {
    name: "Complete Blood Count(CBC)",
    image: cbc,
    cost: 50000,
    booked_date: "2022-9-13",
    state: "booked",
  },
]
