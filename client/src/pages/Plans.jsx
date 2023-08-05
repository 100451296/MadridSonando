import { Link, useParams } from "react-router-dom";
import AuthButton from "../components/AuthButton";
import { getPlans } from "../api/plans";
import { useEffect, useState } from "react";

export function Plans() {
  const { service } = useParams();
  const [plans, setPlans] = useState([]);

  const fetchData = async () => {
    try {
      const plans = await getPlans(service);
      setPlans(plans);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="bg-cyan-950 w-full min-h-screen p-5 lg:p-10">
      <h1 className="text-4xl">Nuestros planes para {service}</h1>

      <div
        className="flex flex-col lg:flex-row  justify-center items-center 
        px-5 lg:px-10 py-5 lg:py-20 space-y-10 lg:space-y-0 lg:space-x-20"
      >
        {plans.map((plan) => (
          <article key={plan.Name} className="flex flex-col w-full lg:w-1/4 lg:min-h-fit bg-white text-black  items-center pt-20 pb-5 px-10">
            <h2 className="font-bold text-2xl mb-5">{plan.Name}</h2>
            <p className="font-bold text-3xl mb-10">{plan.Price}</p>
            <p className="text-xl mb-10">{plan.Description}</p>
            <Link to={"/appointments/" + service}>
                <AuthButton>Contratar Plan</AuthButton>
            </Link>
            
          </article>
        ))}
      </div>
    </section>
  );
}
