export const Template1 = ({ name, email, id_number, phone_no, address, image }) => {
  return (
    <div className="w-80 bg-white rounded-2xl shadow-lg overflow-hidden border">
      <div className="bg-yellow-500 h-20 rounded-t-2xl relative">
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
          <img src={image} alt="Profile" className="w-24 h-24 rounded-full border-4 border-white object-cover" />
        </div>
      </div>

      <div className="pt-14 pb-6 px-6 text-center">
        <h2 className="text-xl font-bold text-gray-800">
          <span className="text-black">NAME:</span> <span className="text-yellow-500">{name}</span>
        </h2>
        <p className="text-gray-500 text-sm">Your Position Here</p>

        <div className="mt-4 text-left text-sm text-gray-700">
          <p>
            <span className="font-bold">EMAIL</span>
            {email}
          </p>
          <p>
            <span className="font-bold">Mail:</span> yourmail@example.com
          </p>
          <p>
            <span className="font-bold">Phone:</span> {phone_no}
          </p>
          <p>
            <span className="font-bold">ID No:</span> {id_number}
          </p>
          <p>
            <span className="font-bold">ADDRESS</span> {address}
          </p>
        </div>
      </div>
    </div>
  );
};

export const Template2 = ({ name, email, id_number, phone_no, address, image, position }) => {
  return (
    <div className="w-[500px] h-[250px] bg-white rounded-xl shadow-lg overflow-hidden border relative">
      <div className="bg-gradient-to-r from-blue-900 to-yellow-500 h-14 rounded-t-xl relative">
        <div className="absolute top-3 left-5 text-white font-bold text-lg">
          <div className="flex items-center space-x-2">
            <span className="text-white text-xl">🎓</span>
            <span>FAUGET HIGH SCHOOL</span>
          </div>
        </div>
      </div>

      <div className="flex px-6 py-4">
        <div className="flex-1">
          <div className="bg-blue-900 text-white font-bold px-3 py-1 rounded w-max text-xs mb-2">STUDENT CARD</div>
          <p className="text-sm">
            <span className="font-bold">NAME:</span> {name}
          </p>
          <p className="text-sm">
            <span className="font-bold">EMAIL:</span> {email}
          </p>
          <p className="text-sm">
            <span className="font-bold">ID:</span> {id_number}
          </p>
          <p className="text-sm">
            <span className="font-bold">POSITION:</span> {position}
          </p>
          <p className="text-sm">
            <span className="font-bold">D.O.B:</span> {phone_no}
          </p>
          <p className="text-sm">
            <span className="font-bold">ADDRESS:</span> {address}
          </p>
        </div>
        <div className="w-24 h-28 rounded-lg overflow-hidden border">
          <img src={image} alt="Student" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="bg-blue-900 h-6 rounded-b-xl relative">
        <div className="absolute -bottom-3 left-5 w-32 h-6 bg-gray-300"></div>
      </div>
    </div>
  );
};
