import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProviders";
const Navbar = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="w-[1171px] h-[57px] mx-auto mt-5 flex shadow-9xl">
            <nav className="w-[1171px] flex h-[57px] justify-between items-center pb-5">
                <div className="font-bold text-[28px] text-[#131313]">
                    <h1>Firebase oparation 3</h1>
                </div>
                <div className="flex gap-3">
                    <NavLink
                        to="/home"
                        className={({ isActive }) =>
                            `rounded-[8px] w-[100px] h-[49px] border text-[18px] font-semibold text-center pt-2.5 
                            ${isActive ? 'border-[#23BE0A] text-[#23BE0A]' : 'border-none text-[#131313]/80'}`
                        }
                    >
                        Home
                    </NavLink>
                    {
                        !user && (
                            <NavLink
                                to="/login"
                                className={({ isActive }) =>
                                    `rounded-[8px] w-[100px] h-[49px] border text-[18px] font-semibold text-center pt-2.5 
                            ${isActive ? 'border-[#23BE0A] text-[#23BE0A]' : 'border-none text-[#131313]/80'}`
                                }
                            >
                                Sing In
                            </NavLink>
                        )
                    }
                    {
                        !user && (
                            <NavLink
                                to="/signup"
                                className={({ isActive }) =>
                                    `rounded-[8px] w-[100px] h-[49px] border text-[18px] font-semibold text-center pt-2.5 
                            ${isActive ? 'border-[#23BE0A] text-[#23BE0A]' : 'border-none text-[#131313]/80'}`
                                }
                            >
                                Sing Up
                            </NavLink>
                        )
                    }
                    {
                        user && (
                            <NavLink
                                to="/OrderList"
                                className={({ isActive }) =>
                                    `rounded-[8px] w-[100px] h-[49px] border text-[18px] font-semibold text-center pt-2.5 
                            ${isActive ? 'border-[#23BE0A] text-[#23BE0A]' : 'border-none text-[#131313]/80'}`
                                }
                            >
                                Orders
                            </NavLink>
                        )}

                    {
                        user && (
                            <NavLink
                                to="/UserProfile"
                                className={({ isActive }) =>
                                    `rounded-[8px] w-[100px] h-[49px] border text-[18px] font-semibold text-center pt-2.5 
                            ${isActive ? 'border-[#23BE0A] text-[#23BE0A]' : 'border-none text-[#131313]/80'}`
                                }
                            >
                                Profile
                            </NavLink>
                        )
                    }



                </div>

            </nav>
        </div>
    );
};
export default Navbar;