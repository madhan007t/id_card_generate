export const Template1 = ({ name, email, id_number, phone_no, address, image, position, title }) => {
  return (
    <div className="w-[500px] h-[250px] bg-white rounded-xl shadow-lg overflow-hidden border relative">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-yellow-500 h-14 rounded-t-xl flex items-center px-5">
        <span className="text-white text-2xl">🎓</span>
        <span className="text-white font-semibold text-lg ml-2">{title}</span>
      </div>

      {/* Body */}
      <div className="flex px-6 py-3 items-center">
        {/* Left Content */}
        <div className="flex-1">
          <div className="bg-blue-900 text-white font-bold px-3 py-1 rounded w-max text-xs mb-2">STUDENT CARD</div>
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-gray-900">Name:</span> {name}
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-gray-900">Email:</span> {email}
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-gray-900">ID:</span> {id_number}
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-gray-900">Position:</span> {position}
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-gray-900">D.O.B:</span> {phone_no}
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-gray-900">Address:</span> {address}
          </p>
        </div>

        {/* Image Section */}
        <div className="w-[100px] h-[120px] rounded-lg overflow-hidden border shadow-md">
          <img src={image} alt="Student" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Footer */}
      <div className="bg-blue-900 h-6 rounded-b-xl flex items-center px-5">
        <div className="w-32 h-5 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export const Template2 = ({ name, email, id_number, phone_no, address, image, position }) => {
  return (
    <div className="w-80 bg-white rounded-2xl shadow-lg overflow-hidden border">
      <div className="bg-secondary h-40 rounded-t-2xl relative">
        {/* <h1 className="text-white font-bold items-center flex justify-center pt-10">{title}</h1> */}
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
          <img src={image} alt="Profile" className="w-[150px] h-[150px] rounded-full border-4 border-white object-cover" />
        </div>
      </div>

      <div className="pt-14 pb-6 px-6 flex flex-col items-center justify-center  ">
        <h2 className="text-xl font-bold text-gray-800">
          <span className="text-yellow-500">{name}</span>
        </h2>
        <p className="text-gray-500 text-sm">{position}</p>

        <div className="mt-4 text-sm text-gray-700 items-center justify-center ml-8">
          <p>
            <span className="font-bold">Email:</span> {email}
          </p>
          <p>
            <span className="font-bold">Phone:</span> {phone_no}
          </p>
          <p>
            <span className="font-bold">ID No:</span> {id_number}
          </p>
          <p>
            <span className="font-bold">Address:</span> {address}
          </p>
        </div>
      </div>

      <div className="bg-secondary h-[20px]"></div>
    </div>
  );
};

export const Template3 = ({ name, email, id_number, phone_no, address, image, position, title }) => {
  return (
    <div className="w-[500px] h-[250px] bg-white rounded-xl shadow-lg overflow-hidden border relative">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-yellow-500 h-14 rounded-t-xl relative">
        <div className="absolute top-3 left-5 text-white font-bold text-lg">
          <div className="flex items-center space-x-2">
            <span className="text-white text-xl">🎓</span>
            <span>{title}</span>
          </div>
        </div>
      </div>

      {/* Body with Image on Left and Details on Right */}
      <div className="flex px-6 py-4">
        {/* Image Section */}
        <div className="w-24 h-28 rounded-lg overflow-hidden border mr-4 mt-8 ">
          <img src={image} alt="Student" className="w-full h-full object-cover " />
        </div>

        {/* Details Section */}
        <div className="flex-1">
          <div className="bg-blue-900 text-white font-bold px-3 py-1 rounded w-max text-xs mb-2">STUDENT CARD</div>
          <p className="text-sm">
            <span className="">NAME:</span> {name}
          </p>
          <p className="text-sm">
            <span className="">EMAIL:</span> {email}
          </p>
          <p className="text-sm">
            <span className="">ID:</span> {id_number}
          </p>
          <p className="text-sm">
            <span className="">POSITION:</span> {position}
          </p>
          <p className="text-sm">
            <span className="">D.O.B:</span> {phone_no}
          </p>
          <p className="text-sm">
            <span className="">ADDRESS:</span> {address}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-blue-900 h-6 rounded-b-xl relative">
        <div className="absolute -bottom-3 left-5 w-32 h-6 bg-gray-300"></div>
      </div>
    </div>
  );
};
