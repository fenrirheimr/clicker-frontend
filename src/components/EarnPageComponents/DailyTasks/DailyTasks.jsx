import { dailyTaskItems } from "../../../constants";
import MainTask from "./MainTask";

const DailyTasks = ({click}) => {
    return (
        <div className="w-full mt-8">
            <h2 className="font-semibold mb-3 text-white text-2xl text-left">Daily tasks</h2>
            {dailyTaskItems.map((task) => (
                <MainTask key={task.id} onClick={() => {click(true)}}  data={task} />
            ))}
        </div>
    );
};

export default DailyTasks;