import classes from "../../../Styles/Pages.module.css";
import Mountian from "../../../Images/BearPeaksImages/DecorationBearPeaks.png";
import Star from "../../../Images/HomePageImages/Star.png";
import { useNavigate } from "react-router";
import DwarvenRace1 from "../../../Images/BearPeaksImages/DwarvenRace.jpg";
import DwarvenRace2 from "../../../Images/BearPeaksImages/DwarvenRaceWoman.jpg";
import DwarvenRace3 from "../../../Images/BearPeaksImages/DwarvenRaceTwo.jpg";
import DwarvenRace4 from "../../../Images/BearPeaksImages/DwarvenRaceWomanTwo.jpg";

export const DwarvenRacesPage = () => {

    const navigate = useNavigate();

    function handleFactionsPageTransition() {
        navigate(-1);
    };

    return (
        <div className={classes.pageDwarven}>
             <div className={classes.overlayTopbar}>
                <img className={classes.star} src={Star} alt="Star" draggable="false"/>
                <div className={classes.topbar}>
                    <h1>Гномы</h1>
                </div>
            </div>

            <div className={classes.overlayBlockContent}>
                <div className={classes.blockContentBearPeaks}>
                    <div className={classes.contentScrollRace}>

                        <h1>Гномы</h1>
            
                            <p>
                                <img className={classes.imageVerticalLeft} src={DwarvenRace1} alt="DwarvenRace1" draggable="false"/>
                                    Представители расы гномов — это широкоплечие, коренастые мужчины и женщины невысокого роста с невероятной выдержкой к холодному климату. 
                                    Продолжительность жизни, в зависимости от того, чем занимается гном, составляет где-то в пределах от 300 до 400 лет. 
                                    Одно из главных их отличий от других рас, населяющих континент, — большой объём лёгких, что, в свою очередь, позволяет им насыщать организм кислородом там, где его меньше, а именно в высокогорьях, где воздух разрежён.  
                                    Скорее всего, это связано с тем, что при исходе в горы по окончании Эпохи Зимы их предки, обосновавшись в ущельях и на возвышенностях, с течением времени полностью изменили свой организм; их дети от поколения к поколению становились всё привычнее к такому климату и месту, в котором жили. 
                                <img className={classes.imageVerticalRight} src={DwarvenRace2} alt="DwarvenRace2" draggable="false"/>
                                    Но возможно, это также связано ещё и с быстрой адаптацией организма гнома к новым условиям. Они быстро привыкают к смене обстановки и природных условий. 
                                    Женщины гномов отнюдь не стали в таких условиях грубыми и неряшливыми, а наоборот находили красоту в этих тяжёлых для остальных рас условиях. 
                                    Они наряжаются в различные меха животных, коих в горах предостаточно, создавая из шкур подобия украшений, совмещая их с самоцветами, камнями и металлами. 
                                    Так практически каждая из них имеет при себе сумочку с различными брошками, серьгами, браслетами, меняя их в зависимости от того, где им предстоит показаться. 
                                    Мужчины, наоборот, считают это лишним и остаются приверженцами удобных вещей взамен прикрас; только высшие сословия, соответствуя статусу, украшают себя и носят изысканные наряды. 
                                    Основная же масса мужчин предпочитает тёплые кафтаны и жёсткие войлочные штаны.
                            </p>
                                
                            <p>
                                <img className={classes.imageVerticalLeft} src={DwarvenRace3} alt="DwarvenRace3" draggable="false"/>
                                    Но среди гномов существует ещё и отдельная ветвь развития расы.
                                    Народ Куркачи — по своим особенностям они такие же гномы, но более низкого роста и с огненно-рыжим цветом волос. 
                                    Их продолжительность жизни составляет 250–300 лет. Откуда взялась эта отколовшаяся часть расы, пошедшая по своему пути развития, никто так и не знает. 
                                    Скорее всего, это потомки первых строителей и горняков, работавших в стеснённых условиях в шахтах и тоннелях под горами Медвежьих Вершин. 
                                    Они были первопроходцами в глубоком подземном мире горных хребтов, прорубая своими кирками очертания нового королевства на первых этапах его становления. 
                                    Одно из отличий Куркачи от основной расы гномов — это крайне высокая выносливость: там, где простой гном измотается через пару часов, представитель этого народа только начнёт входить в ритм рабочего процесса. 
                            </p>
                            
                            <p>
                                <img className={classes.imageHorizontally} src={DwarvenRace4} alt="DwarvenRace4" draggable="false"/>
                                    Незыблемая черта всех гномов, которая иногда бесит остальные расы, — это педантичность и перфекционизм, доведённые до крайности. 
                                    Подсчёты, расчёты, составление списков, скрупулёзная работа с бумагами и сведение процентов — это лишь то немногое, чем занимается каждый гном в повседневной жизни. 
                                    Все расходы и доходы подсчитаны на годы вперёд, и любое отступление от плана выводит их из себя. 
                                    Обмануть гнома на рынке невозможно; скорее он обманет того, кто это попытается сделать, и при этом заставит его думать, что тот остался в выигрыше. 
                                    Предприимчивость у них в крови; то, что другим кажется жадностью, у гномов считается ритуалом, возведённым в культ. 
                                    Проще говоря, это часть их суровой, но удивительной сущности. 
                            </p>

                    </div>
                </div>
            </div>
        
                <img className={classes.sideDecorationRightBearPeaks} src={Mountian} alt="Mountian" draggable="false"/>
                <img className={classes.sideDecorationLeftBearPeaks} src={Mountian} alt="Mountian" draggable="false"/>
                <button className={classes.transitionButton} onClick={handleFactionsPageTransition}>Главная</button>
       </div>
    )
};