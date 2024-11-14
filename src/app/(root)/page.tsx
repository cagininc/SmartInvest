import { HeaderBox } from '@/components/ui/HeaderBox'
import RightSidebar from '@/components/ui/RightSidebar'
import  TotalBalanceBox  from '@/components/ui/TotalBalanceBox'
import React from 'react'

const Home = () => {

const loggedIn={firstName:"Cagin",lastName:"INC",email:"cagininc@gmail.com"}


  return (
    <section className="home">Home
<div className="home-content"> 
<header className="home-header">



<HeaderBox
type="greeting"
title="Welcome"
user={loggedIn?.firstName||"Guest" }
subtext=
"Manage your account and transactions with ease and efficiency."
/>
<TotalBalanceBox
accounts={[]}
totalBanks= {1}
totalCurrentBalance={7650.45}

/>
</header>
Recent Transactions
</div>

{/* right side bar  here its only on this page so its not in the layout*/}
<RightSidebar 
user={loggedIn}
transactions={[]}
  banks={[{currentBalance:123.50},{currentBalance:145.50}]}


/>
</section>
  )
}

export default Home