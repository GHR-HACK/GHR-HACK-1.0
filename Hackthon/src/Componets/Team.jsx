import Mayur from"../assets/Team/Me.jpg";
import "../Styles/Team.css";

function Team() {
    return (
        <div className=" bg-[#011947]">
        <div className="text-center Team" id="team">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mt-1">Team</h1>
            <h2 className="text-2xl sm:text-3xl font-bold mt-10 text-left ms-10 ps-10 text-white">ORGANIZERS</h2>
            <div className="flex flex-col sm:flex-row justify-center mt-10 space-y-10 sm:space-y-0 sm:space-x-10">
                <div className="text-center">
                    <div className="w-40 h-40 sm:w-60 sm:h-60 bg-gray-300 rounded-full mx-auto"></div>
                    <h3 className="text-lg sm:text-xl font-bold mt-4">Kartik Chaudhari</h3>
                    <p className="text-md sm:text-lg">Overall Coordinator</p>
                </div>
                <div className="text-center">
                    <div className="w-40 h-40 sm:w-60 sm:h-60 bg-gray-300 rounded-full mx-auto"></div>
                    <h3 className="text-lg sm:text-xl font-bold mt-4">Vidya Baviskar</h3>
                    <p className="text-md sm:text-lg">Overall coordinator</p>
                </div>
                <div className="text-center">
                    <div className="w-40 h-40 sm:w-60 sm:h-60 bg-gray-300 rounded-full mx-auto"></div>
                    <h3 className="text-lg sm:text-xl font-bold mt-4">Kalpesh Borde</h3>
                    <p className="text-md sm:text-lg">Overall coordinator</p>
                </div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mt-10 text-left ms-10 ps-10 text-white">OPERATIONS</h2>
            <div className="text-center">
                <div className="w-40 h-40 sm:w-60 sm:h-60 bg-gray-300 rounded-full mx-auto"></div>
                <h3 className="text-lg sm:text-xl font-bold mt-4">Mrunal Mahajan</h3>
                <p className="text-md sm:text-lg">Head Coordinator</p>
            </div>        

            <h2 className="text-2xl sm:text-3xl font-bold mt-10 text-left ms-10 ps-10 text-white">LOGISTICS</h2>
            <div className="text-center">
                <div className="w-40 h-40 sm:w-60 sm:h-60 bg-gray-300 rounded-full mx-auto"></div>
                <h3 className="text-lg sm:text-xl font-bold mt-4">Kunal Badgujar</h3>
                <p className="text-md sm:text-lg">Head Coordinator</p>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold mt-10 text-left ms-10 ps-10 text-white">TECHNICAL</h2>
            <div className="text-center">
                <div className="w-40 h-40 sm:w-60 sm:h-60 rounded-full mx-auto">{Mayur}</div>
                <h3 className="text-lg sm:text-xl font-bold mt-4">Mayur Nikumbh</h3>
                <p className="text-md sm:text-lg">Head Coordinator</p>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold mt-10 text-left ms-10 ps-10 text-white">DESIGN</h2>
            <div className="flex flex-col sm:flex-row justify-center mt-10 space-y-10 sm:space-y-0 sm:space-x-10">
                <div className="text-center">
                    <div className="w-40 h-40 sm:w-60 sm:h-60 bg-gray-300 rounded-full mx-auto"></div>
                    <h3 className="text-lg sm:text-xl font-bold mt-4">Neeraj Rakhecha</h3>
                    <p className="text-md sm:text-lg">Head Coordinator</p>
                </div>
                <div className="text-center">
                    <div className="w-40 h-40 sm:w-60 sm:h-60 bg-gray-300 rounded-full mx-auto"></div>
                    <h3 className="text-lg sm:text-xl font-bold mt-4">Kartik Deshmukh</h3>
                    <p className="text-md sm:text-lg">Head Coordinator</p>
                </div>                
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold mt-10 text-left ms-10 ps-10 text-white">MARKETING</h2>
            <div className="text-center">
                <div className="w-40 h-40 sm:w-60 sm:h-60 bg-gray-300 rounded-full mx-auto"></div>
                <h3 className="text-lg sm:text-xl font-bold mt-4">Bhavesh Kanhaiya</h3>
                <p className="text-md sm:text-lg">Head Coordinator</p>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold mt-10 text-left ms-10 ps-10 text-white">FINANCE</h2>
            <div className="flex flex-col sm:flex-row justify-center mt-10 space-y-10 sm:space-y-0 sm:space-x-10 mb-10 pb-10">
                <div className="text-center">
                    <div className="w-40 h-40 sm:w-60 sm:h-60 bg-gray-300 rounded-full mx-auto"></div>
                    <h3 className="text-lg sm:text-xl font-bold mt-4">Shreyas Badgujar</h3>
                    <p className="text-md sm:text-lg">Head Coordinator</p>
                </div>
                <div className="text-center">
                    <div className="w-40 h-40 sm:w-60 sm:h-60 bg-gray-300 rounded-full mx-auto"></div>
                    <h3 className="text-lg sm:text-xl font-bold mt-4"> Rohit Pitrubhakt</h3>
                    <p className="text-md sm:text-lg">Head Coordinator</p>
                </div>                
            </div>
        </div>
        </div>
    );
}

export default Team;