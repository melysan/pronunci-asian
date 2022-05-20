// import SearchBar from "../comps/searchbar"
import Header from "../comps/Header"
import NameCard from "../comps/namecardcont"
import TopBar from '../comps/TopBar'
import { useRouter } from 'next/router'
import NavBar from '../comps/NavBar';
import { PageWrap } from "../comps/SetComps"
import { ChineseName, JapaneseName, KoreanName, VietName } from '../data/name_data.js'


function NamePageResults() {
  const r = useRouter();
  var { page} = r.query;


  // if( page === "Chinese") {

  //   {ChineseName.map((item, index) => (
  //     <NameCard txtname={item.Name} country_txt={item.Country} index={index}
  //   />
  //     ))}

  // } else if( page === 'Vietnamese') {
  //   {VietName.map((item, index) => (
  //     <NameCard txtname={item.Name} country_txt={item.Country} index={index}
  //   />
  //     ))}
  //   }
  // }


  return <div>
    <style>@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;700&display=swap');</style>

    <PageWrap>
      <TopBar
        backto="/namepage" />
      <Header h1={page}></Header>

      {(page === "Chinese") && ChineseName.map((item, index) => (
        <div key={index}><NameCard ind={index} txtname={item.Name} country_txt={item.Country} />
      </div>))}
      {(page === "Vietnamese") && VietName.map((item, index) => (
        <div key={index}><NameCard ind={index} txtname={item.Name} country_txt={item.Country} />
      </div>))}{(page === "Japanese") && JapaneseName.map((item, index) => (
        <div key={index}><NameCard ind={index} txtname={item.Name} country_txt={item.Country} />
      </div>))}{(page === "Korean") && KoreanName.map((item, index) => (
        <div key={index}><NameCard ind={index} txtname={item.Name} country_txt={item.Country} />
      </div>))}
      


      <NavBar namebuttoncolor='#FC5F6C'
        nametextcolor='#FC5F6C'>
      </NavBar>
    </PageWrap>
  </div>
}

export default NamePageResults;