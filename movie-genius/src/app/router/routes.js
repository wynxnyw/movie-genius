import Home from "../../components/pages/Home";
import PageOne from "../../components/pages/PageOne";
import PageTwo from "../../components/pages/PageTwo";

export const routes = [
  {
    path: '/',
    component: Home,
    label: 'Home'
  },
  
  {
    path: '/page-one',
    component: PageOne,
    label: 'Page One'
  },
  
  {
    path: '/page-two',
    component: PageTwo,
    label: 'Page Two'
  }
]