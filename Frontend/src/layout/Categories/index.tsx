
import { useEffect, useState } from "react"
import { api } from "../../services/apiService";



const Categories = () => {

  const [categories, setCategories] = useState([]);

  const GetCategories = async () => {
    const res = await api.get("/category/all-categories");
    if (res.data.success) {
      setCategories(res.data.payload.allCategories)
    }
  }

  useEffect(() => {
    GetCategories();
  }, []);



  return (
    <>
      <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Browse Jobs by Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {categories.length > 0 ? (
          categories.map((c:any, i) => (
            <div key={i} className="category bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="font-semibold text-lg mb-2">{c.name}</div>
              <div className="text-sm text-gray-600">58 jobs</div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-8">Loading...</div>
        )}
      </div>
    </div>

    </>
  )
}

export default Categories