import  '../Styles/Offer.css'

const Offer = () => {
    return(
        <div>
<div className='Bg-Photo'></div>
            {/* <h1 style={{ fontSize: "3rem" }}>OFFERS</h1> */}
           
            <div className="bg-t">
            <h1 style={{ fontSize: "3rem" ,color:'blue'  }} >OFFERS</h1>
            <div className='grid'>
         
         <div className='card'>
         <div className="image">
                             <img src="https://www.shutterstock.com/shutterstock/photos/2375251485/display_1500/stock-photo-energetic-asian-woman-in-sportswear-holding-yoga-mat-and-bottle-of-water-preparing-for-refreshing-2375251485.jpg" alt=""/>
                         </div>
                         <div>
                             <h1>Only Today</h1>
                             <h1>Join Today@$999only</h1>
                             <h2>Avaliable for 24hours</h2>
                         </div>
         </div>
         <div className='card'>
         <div className="image">
                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJmp9ufyy6irsCwKLDKl7fcpwdvkNSdpETLw&s" alt=""/>
                         </div>
                         <div>
                             <h1>Extra $200off</h1>
                             <h1>Free 15 days</h1>
                             <h1>Lowest Price</h1>
                         </div>
         </div>
         <div className='card'>
         <div className="image">
                             <img src="https://m.media-amazon.com/images/I/61Ssh8izd0L._AC_UL320_.jpg" alt=""/>
                         </div>
                         <div>
                             <h1>Offers</h1>
                             <h1>Join Today@$999only</h1>
                             <h2>Avaliable for 24hours</h2>
                         </div>
                         
         </div>
         
                        
                 </div>
                 
            </div>
        </div>
    )
}
export default Offer