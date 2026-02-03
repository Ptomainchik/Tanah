import { useNavigate } from "react-router";
import classes from "../../Styles/Pages.module.css";
import Precipice from "../../Images/HistoryImages/DecorationHistory.png";
import Star from "../../Images/HomePageImages/Star.png";
import Feather from "../../Images/Icons/Feather.png";
import HistoryImage1 from "../../Images/HistoryImages/BackgroundPageHistory.jpg";
import HistoryImage2 from "../../Images/HistoryImages/AgeOfWinter.jpg";
import HistoryImage3 from "../../Images/HistoryImages/MapOfTanah.png";
import { useState } from "react";

export const HistoryPage = () => {
    const [stateMap, setStateMap] = useState(false);
    const navigate = useNavigate();

    function handleFactionsPageTransition() {
        navigate(-1);
    };

    function handleOpenMap() {
        setStateMap(true);
    };

    function handleCloseMap() {
        setStateMap(false);
        
    };

    return (
        <div className={classes.pageHistory}>
            <div className={classes.overlayTopbar}>
                <img className={classes.star} src={Star} alt="Star" draggable="false"/>
                <div className={classes.topbar}>
                    <h1>История мира</h1>
                </div>
            </div>

            <div className={classes.overlayBlockContent}>
                <div className={classes.blockContentHistory}>
                    <img className={classes.imageBlockContentHistory} src={Feather} alt="Feather" draggable="false"/>
                    <div className={classes.contentScrollFaction}>  
                        <div>
                            <h1>История мира</h1>

                                <img className={classes.imageHorizontally} src={HistoryImage1} alt="HistoryImage1" draggable="false"/>

                                    <p>
                                        В своём величии и великолепии посреди глубокого океана Тан из пучин вырастает огромный континент Танах.
                                        Сотни тысяч лет назад он был пустым клочком суши в загадочном и бесконечном Дэлхие.
                                        А сейчас это цветущий мир с разнообразной флорой и фауной, множеством народов, рас и культур.
                                        От северных заснеженных пиков Медвежьих вершин до застывших магматических полей юга, где гигантские вулканы то и дело оживают, напоминая обитателям континента о том, что Танах живой и постоянно меняется.
                                        Здесь жаркая Великая пустыня с обжигающим солнцем и засушливые Пустоши ангалов с глубокими каньонами врезаются в зелёные просторы Инмарской равнины, а мрачное заболоченное Чёрнолесье резко сменяется сияющими под лунным сиянием Лазурными лесами.
                                        Живое море посреди южных земель обеспечивает пропитанием практически все народы, а у подножия северных гор замерло во льдах Ледяное озеро, дающее начало бурной реке Тамиз, расправляющей свои рукава по сторонам в центре континента.
                                        Сам же Дэлхий является бескрайним и не имеет ни конца, ни края; никто никогда не видел его и не знает, что он из себя представляет.
                                        В одних легендах он описывается как бесконечный океан-бездна, который запирает внутри себя внутренний океан Тан, в котором и расположился континент Танах.
                                        Другие же верят, что всё имеет начало и конец, так и Делхий обязательно где-то заканчивается.
                                        Предположений сотни, но пока никто не осмеливался выходить дальше вод Тана, ввиду его огромных размеров.
                                        Небесное светило, звёзды и луна, по тем же легендам, изображаются как некие отголоски прошлого — сияющие воспоминания всех поколений, 
                                        существовавших ранее, постоянно перемещающиеся по бесконечному полотну всеобщей памяти, которые напоминают ныне живущим о вечности.
                                    </p>
                             
                                <img className={classes.imageHorizontally} src={HistoryImage2} alt="HistoryImage2" draggable="false"/>

                                    <p>
                                        Сейчас континент и населяющие его расы возрождаются, а его природа расцветает, но в недалёком прошлом он был объят холодом и скован морозами.
                                        4000 лет назад Танах настиг катаклизм, обрушивший резкое похолодание на всей его территории; этот период называют Эпохой Зимы.
                                        1000 лет он находился в ледяном плену, а те, кто жил тогда, существовали на грани жизни и смерти.
                                        В постоянной борьбе с холодом большинство народов изменили свой быт и жизненный уклад до неузнаваемости; лишь некоторые из них вышли из катаклизма, сохранив свои устои.
                                        Но были и те, кто благодаря Эпохе Зимы положил начало становлению новых народов в Танахе.
                                        С момента окончания катаклизма, когда река Тамиз подняла над собой льды и вышла из берегов, затопив всё в округе, стало принято вести отчёт летоисчисления.
                                        С тех пор прошло три тысячелетия.
                                    </p>
                            
                                <img className={classes.imageVerticalCenter} style={{cursor: "zoom-in" , pointerEvents: stateMap === false ? "auto" : "none"}} src={HistoryImage3} onClick={handleOpenMap} alt="HistoryImage3" draggable="false"/>
                                    
                                    <p>
                                        На континенте после катаклизма проживало множество рас, а некоторые и до: орки, обосновавшиеся в Чёрном лесу; 
                                        люди, расколовшиеся на несколько народов, один из которых переселился в Великую пустыню и создал там Конфедерацию племён; 
                                        а те, кто остались, продолжили жить на Инмарской равнине и основали Королевство Инмар; эльфы в Лазурных лесах, породившие Империю Марах; 
                                        гномы, перебравшиеся в горы Медвежьих вершин и установившие одноимённое королевство; ангалы в Пустошах со своим матриархатом; и те, 
                                        о которых известно немного, — Маат, народ, обитающий на самом юге Танаха.
                                    </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        
                <img className={classes.sideDecorationRightHistory} src={Precipice} alt="Precipice" draggable="false"/>
                <img className={classes.sideDecorationLeftHistory} src={Precipice} alt="Precipice" draggable="false"/>
            
                <button className={classes.transitionButton} onClick={handleFactionsPageTransition} disabled={stateMap === true}>Главная</button>
            {stateMap && <div className={classes.contentScrollMap}><img className={classes.imageMap} src={HistoryImage3} alt="HistoryImage3" draggable="false"/><p className={classes.closeImageMap} onClick={handleCloseMap}>×</p></div>}
        </div>
    )
};