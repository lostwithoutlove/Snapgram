import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const LeftSidebar = () => {
  return (
    <nav className="leftsidebar">
      <div className="flex flex-col gap-11">
        <Link to="/" className="flex gap-3 items-center">
          <img
            src="/assets/images/logo.svg"
            alt="logo"
            width={170}
            height={36}
          />
        </Link>

        <div className="h-14">Loader</div>
        <div className="flex gap-3 items-center">
          <img
            src={"/assets/icons/profile-placeholder.svg"}
            alt="profile"
            className="h-14 w-14 rounded-full"
          />
          <div className="flex flex-col">
            <p className="body-bold">username</p>
            <p className="small-regular text-light-3">user-username</p>
          </div>
        </div>
      </div>
      <Button variant="ghost" className="shad-button_ghost">
        <img src="/assets/icons/logout.svg" alt="logout" />
        <p className="small-medium lg:base-medium">Logout</p>
      </Button>
    </nav>
  );
};

export default LeftSidebar;
