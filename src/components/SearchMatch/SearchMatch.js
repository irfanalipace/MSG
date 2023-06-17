import React,{useState} from "react";
import "./SearchMatch.css";
import imagedata from "../../images/home/content-image.png";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import meetingset1 from "../../images/home/img1.png";
import meetingset2 from "../../images/home/img2.png";
import meetingset3 from "../../images/home/img3.png";
import meetingset4 from "../../images/home/img4.png";
import meetingset5 from "../../images/home/img5.png";
import meetingset6 from "../../images/home/img6.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
function valuetext(value) {
  return `${value}°C`;
}
const SearchMatch = () => {
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
  
    // Example data for the cards
    const data = [
      {
        id: 1,
        image: meetingset1,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "Jun 8, 2023",
      },
      {
        id: 3,
        image: meetingset2,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "Jun 9, 2023",
      },
      {
        id: 5,
        image: meetingset3,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "Jun 10,",
      },
      {
        id: 4,
        image: meetingset4,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "Jun 8, 2023",
      },
      {
        id: 2,
        image: meetingset5,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "Jun 9, 2023",
      },
      {
        id: 6,
        image: meetingset6,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "Jun 10,",
      },
      {
        id: 7,
        image: meetingset3,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "Jun 8, 2023",
      },
      {
        id: 8,
        image: meetingset5,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "Jun 9, 2023",
      },
      {
        id: 9,
        image: meetingset6,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "Jun 10,",
      },
      {
        id: 10,
        image: meetingset1,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "Jun 8, 2023",
      },
      {
        id: 11,
        image: meetingset2,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "Jun 9, 2023",
      },
      {
        id: 12,
        image: meetingset6,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "Jun 10,",
      },
      {
        id: 18,
        image: meetingset1,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "Jun 8, 2023",
      },
      {
        id: 17,
        image: meetingset2,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "Jun 9, 2023",
      },
      {
        id: 16,
        image: meetingset3,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "Jun 10,",
      },
      {
        id: 15,
        image: meetingset1,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "Jun 8, 2023",
      },
      {
        id: 14,
        image: meetingset2,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "Jun 9, 2023",
      },
      {
        id: 13,
        image: meetingset3,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "Jun 10,",
      },
      {
        id: 19,
        image: meetingset1,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "Jun 8, 2023",
      },
      {
        id: 20,
        image: meetingset2,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "Jun 9, 2023",
      },
      {
        id: 21,
        image: meetingset3,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "Jun 10,",
      },
      {
        id: 22,
        image: meetingset1,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "Jun 8, 2023",
      },
      {
        id: 23,
        image: meetingset2,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "Jun 9, 2023",
      },
      {
        id: 24,
        image: meetingset3,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "Jun 10,",
      },
      {
        id: 1,
        image: meetingset1,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "Jun 8, 2023",
      },
      {
        id: 25,
        image: meetingset2,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "Jun 9, 2023",
      },
      {
        id: 26,
        image: meetingset3,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "Jun 10,",
      },
      {
        id: 27,
        image: meetingset1,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "Jun 8, 2023",
      },
      {
        id: 28,
        image: meetingset2,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "Jun 9, 2023",
      },
      {
        id: 29,
        image: meetingset3,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "Jun 10,",
      }
      // Add more data objects as needed
    ];
  
    // Calculate the index range of the items to be displayed on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  
    const handlePageChange = (event, value) => {
      setCurrentPage(value);
    };
  return (
    <div>
    
      <div className="content-image-page-data">
        <img src={imagedata} />
        <div className="container">
        <div className="row">
            <div className="text-container-data-blogd-save">
               <div >
                 <h3>match search</h3>
               </div>
             
            </div>
        </div>
      </div>
      </div>
    
      <div className="container">
     
        <form>
           
          <div className="container textlistbox-searchmatch">
            <div className="row">
                   
              <div className="col-2">
                <div className="form-group " style={{textAlign:'center', width:'165px'}}>
                <button className="connection-button-header">Search</button>
                </div>
              </div>
              <div className="col-2">
                <div className="form-group">
               
                  <Box sx={{ width: 194, height:'37px' }}  className="form-control">
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
   
        placeholder='age'
      />
    </Box>
                </div>
              </div>
              
              <div className="col-2">
                <div className="form-group">
               
                  <select className="form-control" id="gender">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="col-2">
                <div className="form-group">
                  <select className="form-control" id="city">
                    <option>City</option>
                    <option>London</option>
                    <option>Paris</option>
                  </select>
                </div>
              </div>


              <div className="col-2">
                <div className="form-group">
                
                  <select className="form-control" id="religion">
                    <option>Religious View</option>
                    <option>Islam</option>
                    <option>Hinduism</option>
                    <option>Buddhism</option>
                    <option>Judaism</option>
                    <option>Atheism</option>
                  </select>
                </div>
              </div>

          

           
              <div className="col-2">
                <div className="form-group">
                  
                  <input
                    type="text"
                    className="form-control"
                    name='name'
                    placeholder="personal situation
                    "
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div >
      <div className="container container-blog-data-footer searct-data-container-blog-data-footer">
        {/* Pagination */}
        <div className="row">
         
          <div className="col-md-12 col-sm-12">
            <div className="card-dev-container-mobile-space-section-age-cart">
              <div className="row">
                {/* Render the current items */}
                {currentItems.map((item) => (
                  <div
                    key={item.id}
                    className="col-md-2 col-sm-4 col-4"
                  >
                    <div className="image-fooetr-blog">
                      <img
                        className="image-for-blog-data-sets-view"
                        src={item.image}
                        alt="Card"
                      />
                    </div>
                
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
         
         <div className="col-md-12 col-sm-12">
           <div className="card-dev-container-mobile-space-section-age-cart">
             <div className="row">
               {/* Render the current items */}
               {currentItems.map((item) => (
                
                 <div
                   key={item.id}
                   className="col-md-2 col-sm-4 col-4"
                 >
                   <div className="image-fooetr-blog">
                     <img
                       className="image-for-blog-data-sets-view"
                       src={item.image}
                       alt="Card"
                     />
                   </div>
                   {console.log(item,'datahereitem')}
                 </div>
               ))}
             </div>
           </div>
         </div>
       </div>
       <div className="row">
         
         <div className="col-md-12 col-sm-12">
           <div className="card-dev-container-mobile-space-section-age-cart">
             <div className="row">
               {/* Render the current items */}
               {currentItems.map((item) => (
                 <div
                   key={item.id}
                   className="col-md-2 col-sm-4 col-4"
                 >
                   <div className="image-fooetr-blog">
                     <img
                       className="image-for-blog-data-sets-view"
                       src={item.image}
                       alt="Card"
                     />
                   </div>
               
                 </div>
               ))}
             </div>
           </div>
         </div>
       </div>
       <div className="row">
         
         <div className="col-md-12 col-sm-12">
           <div className="card-dev-container-mobile-space-section-age-cart">
             <div className="row">
               {/* Render the current items */}
               {currentItems.map((item) => (
                 <div
                   key={item.id}
                   className="col-md-2 col-sm-4 col-4"
                 >
                   <div className="image-fooetr-blog">
                     <img
                       className="image-for-blog-data-sets-view"
                       src={item.image}
                       alt="Card"
                     />
                   </div>
               
                 </div>
               ))}
             </div>
           </div>
         </div>
       </div>
       <div className="row">
         
         <div className="col-md-12 col-sm-12">
           <div className="card-dev-container-mobile-space-section-age-cart">
             <div className="row">
               {/* Render the current items */}
               {currentItems.map((item) => (
                 <div
                   key={item.id}
                   className="col-md-2 col-sm-4 col-4"
                 >
                   <div className="image-fooetr-blog">
                     <img
                       className="image-for-blog-data-sets-view"
                       src={item.image}
                       alt="Card"
                     />
                   </div>
               
                 </div>
               ))}
             </div>
           </div>
         </div>
       </div>
       <div className="row">
         
         <div className="col-md-12 col-sm-12">
           <div className="card-dev-container-mobile-space-section-age-cart">
             <div className="row">
               {/* Render the current items */}
               {currentItems.map((item) => (
                 <div
                   key={item.id}
                   className="col-md-2 col-sm-4 col-4"
                 >
                   <div className="image-fooetr-blog">
                     <img
                       className="image-for-blog-data-sets-view"
                       src={item.image}
                       alt="Card"
                     />
                   </div>
               
                 </div>
               ))}
             </div>
           </div>
         </div>
       </div>
       <div className="row">
         
         <div className="col-md-12 col-sm-12">
           <div className="card-dev-container-mobile-space-section-age-cart">
             <div className="row">
               {/* Render the current items */}
               {currentItems.map((item) => (
                 <div
                   key={item.id}
                   className="col-md-2 col-sm-4 col-4"
                 >
                   <div className="image-fooetr-blog">
                     <img
                       className="image-for-blog-data-sets-view"
                       src={item.image}
                       alt="Card"
                     />
                   </div>
               
                 </div>
               ))}
             </div>
           </div>
         </div>
       </div>

        <div className="row">
        <div className="col-md-12">
            <div className="sj-left-dev-set-data-from-section">
           
              <Pagination
                count={Math.ceil(data.length / itemsPerPage)}
                shape="rounded"
                page={currentPage}
                onChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
};

export default SearchMatch;
