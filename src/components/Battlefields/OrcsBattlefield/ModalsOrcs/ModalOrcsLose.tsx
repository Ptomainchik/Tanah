import classes from "../../../Styles/BattlefieldsStyles.module.css";
import OrcSkull from "../../../../images/Battlefields/OrcsBattlefield/OrcSkull.webp"
import { RestartLevelButton } from '../../../Button/RestartLevelButton/RestartLevelButton';

export const ModalOrcsLose = () =>{

    return (
        <div className={classes.orcsOverlay}>
           <div className={classes.orcsLose} >
            <h2>Defeat</h2>
            <img src={OrcSkull} alt="Lose" draggable="false"/>
            <h5>Restart Level</h5>
            <RestartLevelButton/>
           </div>
       </div>
    )
}
