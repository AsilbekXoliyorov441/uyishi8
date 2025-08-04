import axios from "axios";
import { Pencil, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetRegionQuery } from "../../store/api";
import { Helmet } from "react-helmet-async";

const StatisticsPage = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [regions, setRegions] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [name , setName] = useState("");
  const [select , setSelect] = useState(null);

  const { data , isLoading , isError , error } = useGetRegionQuery('region');

  if(isLoading) return <p>Loading....</p>

  if(isError) return <p>{error.message} || Xatolik yuz berdi</p>



  console.log(token);
  
  const getAllRegions = async () => {
    
  };

  const addRegion = async(e) => {
    e.preventDefault();

    const payload = {
      name: name,
    };
    try{

      select
        ? await axios.patch(`https://testpsyedu.limsa.uz/region/${select}`, payload ,{
          headers :{
            Authorization:`Bearer ${token}`
          }
        })
        : await axios.post("https://testpsyedu.limsa.uz/region", payload)

      setSelect(null)
      setOpenModal(false);
      getAllRegions();
      setName("")
    }catch(err){
      console.log(err);
    }
  }

const deleteRegion = async(id) => {
   try{
    await axios.delete(`https://testpsyedu.limsa.uz/region/${id}` , {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    getAllRegions()
    alert("O'chirildi")
   }catch(err){
    console.log(err);
   }
}


  const editModal = (region) => {
    setOpenModal(true);
    setName(region?.name);
    setSelect(region?.id)
  }
  return (
    <div>
      <Helmet>
        <title>Psixologiya|Psixologlar maktabi</title>
        <meta name="description" content="Psixologlarni tayyorlovchi maktab" />
      </Helmet>
      <div className="flex justify-between items-center">
        <h1>Statistiklar</h1>

        <button
          onClick={() => setOpenModal(true)}
          className="px-[20px] py-[5px] bg-[blue] text-white text-[24px] font-bold rounded-[10px]"
        >
          Region qo'shish
        </button>
      </div>

      <div className="overflow-x-auto bg-white rounded-xl shadow p-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                No
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Viloyat
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data?.data?.map((region, i) => (
              <tr key={region.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 text-sm text-gray-700">{i + 1}</td>
                <td className="px-4 py-2 text-sm text-gray-800">
                  {region?.name}
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => editModal(region)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => deleteRegion(region?.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {openModal ? (
        <div
          onClick={() => {
            (setOpenModal(false), setName(""), setSelect(null));
          }}
          className="flex fixed top-0 left-0 bg-gray-950/70 w-[100vw] items-center justify-center flex-col h-[100vh]"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-[500px] bg-white w-[100%] shadow-2xl rounded-[10px] p-[20px] "
          >
            <h1>Viloyat {select ? "tahrirlash" : "qo'shish"}</h1>
            <form onSubmit={addRegion} className="flex  flex-col gap-[20px]">
              <input
                value={name}
                onChange={(e) => setName(e?.target.value)}
                className="h-[40px] p-[5px] mt-[30px]  w-[100%] shadow"
                type="text"
                placeholder="Viloyatni kiriting"
              />
              <button
                type="submit"
                className="h-[40px] p-[5px] mt-[30px] bg-[blue] text-white text-[20px]  w-[100%] shadow"
              >
                Viloyat {select ? "tahrirlash" : "qo'shish"}
              </button>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default StatisticsPage;
