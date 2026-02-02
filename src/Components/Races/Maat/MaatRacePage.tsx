import classes from "../../../Styles/Pages.module.css";
import Smoke from "../../../Images/MaatImages/DecorationMaat.png";
import Star from "../../../Images/HomePageImages/Star.png";
import { useNavigate } from "react-router";
import MaatRace1 from "../../../Images/MaatImages/MaatRace.jpg";

export const MaatRacePage = () => {

    const navigate = useNavigate();

    function handleFactionsPageTransition() {
        navigate(-1);
    };
    
    return (
        <div className={classes.pageMaatRace}>
            <div className={classes.overlayTopbar}>
                <img className={classes.star} src={Star} alt="Star" draggable="false"/>
                <div className={classes.topbar}>
                    <h1>Маат</h1>
                    
                </div>
            </div>

            <div className={classes.overlayBlockContent}>
                <div className={classes.blockContentMaat}>
                    <div className={classes.contentScrollRace}>

                        <h1>Маат</h1>

                            <p>
                                <img className={classes.imageVerticalLeft} src={MaatRace1} alt="HumanRace1" draggable="false"/>
                                    О расе Маат известно немного — это крайне закрытое общество, и её порядков не знает никто.
                                    Они обитают на самом юге Танаха, туда, куда не ступит нога ни одного представителя других рас.
                                    Это застывшие магматические поля с вечным сумраком от дымящих вулканов, коих в тех землях достаточное множество.
                                    Те, кто всё же отважился направиться в эти края, больше не возвращались.
                                    Поэтому неизвестно, как они существуют в тех неблагополучных землях; да что там говорить, если не существует даже ни одной мало-мальски достоверной карты тех мест.
                                    По виду они напоминают существ, достаточно высоких и крепко сложенных, но при этом стройных, с серой, как пепел, чешуйчатой кожей, которые не произносят ни слова, находясь в постоянном молчании.
                                    Так описывают их те, кто видел вживую загадочных и в некоторой степени зловещих Маат, по каким-то причинам покинувших юг и забредших вдаль от дома.
                                    Так же быстро, как они появлялись, когда их случайно обнаруживали вне земель, покрытых вулканами, то столь же молниеносно и исчезали, словно гадюки, скрываясь в траве от потревоживших их испуганных путников.
                            </p>
                            
                    </div>
                </div>
            </div>

                <img className={classes.sideDecorationRight} src={Smoke} alt="Smoke" draggable="false"/>
                <img className={classes.sideDecorationLeft} src={Smoke} alt="Smoke" draggable="false"/>
                
                <button className={classes.transitionButton} onClick={handleFactionsPageTransition}>Главная</button>
        
        </div>
    )
};