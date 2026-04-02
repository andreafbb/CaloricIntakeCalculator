
/*
This Components contains the logic and graphic elements to implement
the calculator, with this informations

Mifflin-St Jeor equation

Male
BMR=10W+6.25H−5A+5

Female
BMR=10W+6.25H−5A−161

W weight 
H height (cm)
A age

And then we multiply di Basal Metabolic Rate to the activity level
coefficient, with 5 levels:

No activity -> 1.2
Light activty -> 1.375
Moderate activity -> 1.55
Active -> 1.725
Very Active -> 1.9

TDEE = BMR * Activity Level Coefficient


TODO: Implement the Logic and the Result_box

*/

import { useState } from "react";

function Info(){

    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [gender, setGender] = useState("");
    const [activity, setActivity] = useState("1.2");
    const [result, setResult] = useState("");

    const calculateBMR = () => {
        if(!age || !height || !weight || !gender || !activity){
            setResult("Please insert valid values");
            return;
        }

        let BMR = 0

        if(gender == "male"){
            BMR = (10*weight + 6.25*height + 5 - 5*age).toFixed(0)
        } else if(gender == "female"){
            BMR = (10*weight + 6.25*height -161 - 5*age).toFixed(0)
        }

        let TDEE = calculateTDEE(BMR)

        setResult(`BMR: ${BMR} TDEE: ${TDEE}`);

    }

    const calculateTDEE = (BMR) => {
        return (BMR*Number(activity)).toFixed(0)
    }

    return(
    <div className="parent">
        <div className="child_box">

           {/*Age writing label*/}
           <div className="child2_writing_label">
            <label className="writing_labels" htmlFor="age">Age (18-80)</label>
            <input  type="number" id="age" placeholder="18-80" value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
            

            <div className="child2_gender_buttons">
            {/* Gender buttons*/}
          <form>
            <div className="gender_button"> 
            <label>
                <input type="radio" name="gender" value="male" checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)} /> Male
            </label>
            </div>  

            <div className="gender_button">
            <label>
                <input type="radio" name="gender" value="female" checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}/> Female
            </label>
            </div>
          </form>
    
          </div>

            <div className="child2_writing_label">
            {/*Height writing label*/}
            <label className="writing_labels"  htmlFor="height">Height (cm)</label>
            <input type="number" id="height" placeholder="170" value={height} onChange={(e) => setHeight(e.target.value)} />
            </div>

            <div className="child2_writing_label">
            {/*Weight writing label*/}
            <label className="writing_labels"  htmlFor="weight">Weight (kg)</label>
            <input type="number" id="weight" placeholder="60" value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>

        <div className="child2_select_activity_level">
            {/*Activity level select label*/}
            <label className="writing_labels"  htmlFor="activity">Activity Level</label>
                <select className="menu"
                             id="activity"
                            name="activity"
                            value={activity}
                            onChange={(e) => setActivity(e.target.value)}
                            >
                            <option value="1.2">Sedentary</option>
                            <option value="1.375">Light Activity</option>
                            <option value="1.55">Moderate Activity</option>
                            <option value="1.725">Active</option>
                            <option value="1.9">Very Active</option>
                            </select>
                </div>
             </div>

             {/*Result box*/}
                <div className="child_result_box">
                <button onClick={calculateBMR}>Calculate</button>
                <div className="result">
                {result}
                </div>
                </div>
        </div>
    );
};

export default Info