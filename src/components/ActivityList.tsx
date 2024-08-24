import { Activity } from "../types";
import { categories } from "../data/categories";
import { useMemo } from "react";

type ActivityListProps = {
  activities: Activity[];
};

const ActivityList = ({ activities }: ActivityListProps) => {

    const categoryName = useMemo(()=>
    (category: Activity['category'])=> categories.map( cat => cat.id === category ? cat.name : '')

    , [activities])

  return (
    <>
      <h2 className="text-4xl font-bold text-slate-500 text-center">
        Comdida y antividades
      </h2>
      {activities.map((activity) => (
        <div
          key={activity.id}
          className="px-5 bg-white mt-5 flex justify-between mb-8 py-10"
        >
          <div className="space-y-2 relative">
            <p className={`absolute -top-8  -left-2   px-10 py-2  text-white uppercase font-bold rounded-lg
                ${activity.category ===1 ? 'bg-lime-500' : 'bg-orange-500'}
                `}> {categoryName(+activity.category)}</p>
            <p className="text-2xl font-bold pt-5">{activity.name}</p>
            <p className="font-black text-4xl text-lime-500">
                {activity.calories } {' '}
                <span>Calorias</span></p>
          </div>
          <div></div>
        </div>
      ))}
    </>
  );
};

export default ActivityList;
