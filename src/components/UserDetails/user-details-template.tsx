
import  "./user-details-template.css";

const UserDetailsTemplate = (props:any) => {
   const user = props.userDetails;
   const country = "United States";
   return(
        <div className={"container"}>
          <div className = {"modal-user-name"}>{user.name.first + ' ' + user.name.last}</div>
          <span className = {"modal-user-age"}>{`Age: ${user.registered.age}`}</span>
          <span><img src={user.picture.medium} className={"modal-user-image"}/></span>
          <div  className = {"modal-user-location"}>
            <div className={"modal-user-street"}>{user.location.street.number + " " + user.location.street.name}</div>
            <div className={"modal-user-state"}>{user.location.state + ", " + country}</div>
            <div className={"modal-user-phone"}>{user.phone}</div>
          </div>
          <div className = {"modal-user-email"}>
            <span>{user.email}</span>
          </div>
        </div>
    )
}

export default UserDetailsTemplate;