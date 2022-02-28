import { useState, useEffect } from "react";
import  "./user-list.css";
import UserDetailsTemplate from "../UserDetails/user-details-template";
import ReactModal from "../Common/react-modal";

const UserList = () => {  
    const [userList, setUserList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [userDetails, setUserDetails] = useState();
    const apiUrl = 'https://randomuser.me/api/';
    const loadingMsg = 'Please Wait for Users to Load';
    const userCount = 9;
    const learnMoreText = "Learn More";
  
    const toggleModal =() => {
      setShowModal(!showModal);
    }

    useEffect(() => {
        fetch(apiUrl)
          .then(res => res.json())
          .then(response => {
            const arrUser:any = [];
            for(let i = 0; i < userCount; i++){
              arrUser.push(response.results[0]);
            }
            setUserList(arrUser);
            setIsLoading(false);
          })
          .catch(error => console.log(error));
      }, []);

      return (
        <div className={"flex-row-container"}> 
        {isLoading && <p>{loadingMsg}</p>}
        {userList && userList.map((user:any, index) => (
          <>
            <div className={"flex-row-item"} key={index}>
                <>
                  <div className = {"user-info"}>
                    <span className = {"user-name"}>{user.name.first + ' ' + user.name.last}</span>
                    <span className = {"pipe"}>{` | `}</span>
                    <span className = {"user-location"}>{user.location.state + ", " + "United States"}</span>
                    <span><img src={user.picture.medium} className={"userImage"}/></span>
                    <div className = {"learn-more-div"}>
                      <a 
                        className = {"learn-more"}
                        onClick={()=> {
                          setUserDetails(user);
                          setShowModal(!showModal);
                        }
                        }>
                        {learnMoreText}</a>
                    </div>
                  </div>
                </>
            </div>
            {showModal && userDetails && 
            <ReactModal show={showModal} handleClose={toggleModal}>
                <UserDetailsTemplate userDetails = {userDetails}></UserDetailsTemplate>
            </ReactModal>}
           </>
        ))}
      
        </div>
  
    );
      
}

export default UserList;
