import classes from "../../../Styles/Pages.module.css";
import Tower from "../../../Images/InmarImages/DecorationInmar.png";
import Palm from "../../../Images/ConfederationImages/DecorationConfederation.png";
import Star from "../../../Images/HomePageImages/Star.png";
import { useNavigate } from "react-router";
import HumanRace1 from "../../../Images/ConfederationImages/HumanRaceConfederationWoman.jpg";
import HumanRace2 from "../../../Images/InmarImages/HumanRaceInmarMan.jpg";
import HumanRace3 from "../../../Images/ConfederationImages/HumanRaceConfederationMan.jpg";
import HumanRace4 from "../../../Images/InmarImages/HumanRaceInmarWorldview.jpg";
import HumanRace5 from "../../../Images/ConfederationImages/HumanRaceConfederationWorldview.jpg";

export const HumanRacesPage = () => {

    const navigate = useNavigate();

    function handleFactionsPageTransition() {
        navigate(-1);
    };
    
    return (
        <div className={classes.pageHumanRaces}>
            <div className={classes.overlayTopbar}>
                <img className={classes.star} src={Star} alt="Star" draggable="false"/>
                <div className={classes.topbar}>
                    <h1>Люди</h1>
                    
                </div>
            </div>

            <div className={classes.overlayBlockContent}>
                <div className={classes.blockContentHistory}>
                    <div className={classes.contentScrollRace}>

                        <h1>Люди</h1>

                            <p>
                                <img className={classes.imageVerticalLeft} src={HumanRace1} alt="HumanRace1" draggable="false"/>
                                    Человеческая раса представляет из себя три ветви развития. 
                                    Первые и самые древние — это регистаны: высокие чернокожие мужчины и женщины со стройным телосложением. 
                                    Средняя продолжительность жизни которых варьируется от 150 до 200 лет. 
                                    В основной своей массе это люди с высокоразвитыми интеллектуальными способностями, постигающие глубины мироздания и занимающиеся умственной деятельностью. 
                                    Переносимость невероятных условий очень жаркого климата является одной из главных основ их вида. 
                                    До Эпохи Зимы они обитали в центре континента, иногда смешиваясь и создавая браки с малочисленными эльфами, обитающими там же. 
                                    От этих браков и произошли люди, принадлежащие второй ветви развития расы. 
                                <img className={classes.imageVerticalRight} src={HumanRace2} alt="HumanRace2" draggable="false"/>
                                    Вторым ответвлением человеческой расы являются белокожие мужчины и женщины среднего роста и телосложения. 
                                    Инмарцы — так они сами себя называют, и так называют их все остальные. 
                                    Максимальная продолжительность жизни составляет около 100 лет. 
                                    Большинство из них не верят в россказни о своём происхождении от регистанов. 
                                    Они считают себя созданиями Белого Быка, божества, породившего весь мир и все расы. 
                                    Но главенствующую роль отводят себе, считая остальных проклятыми божеством за то, что те отвернулись от бога. 
                                    Их главной чертой считается подозрительность: они не доверяют никому, кроме себе подобных. 
                                    После того как регистаны покинули центр Танаха и ушли на юг, инмарцы долгое время жили обособленно, но затем некоторые из них решили исследовать южные земли. 
                                    Так они стали появляться в Великой пустыне, куда и перебрались их предки, которым они не верят, ещё во время Эпохи Зимы. 
                                <img className={classes.imageVerticalLeft} src={HumanRace3} alt="HumanRace3" draggable="false"/>
                                    Со временем в союзах регистанов и инмарцев стали появляться дети-метисы, положившие начало третьей ветви развития человеческой расы, с предельным возрастом в 150 лет. 
                                    Метисы, они же пустынные люди, взяли от своих родителей всё самое лучшее — острый ум и находчивость. 
                                    Представители третьей ветви ростом выше среднего, с крепким телосложением и, как это ни странно, они очень проворные для своих габаритов; видимо, это проявление эльфийских черт, заложенных предками инмарцев и по каким-то причинам передавшихся им. 
                                    Способность к быстрому обучению сделала этих людей очень адаптированными к любым трудностям, а высокие физические показатели с их невероятной ловкостью идеально подошли для службы в армии, морской стезе и караванном деле.  
                            </p>
                                
                            <p>
                                <img className={classes.imageHorizontally} src={HumanRace4} alt="HumanRace4" draggable="false"/>
                                    Вера инмарцев впиталась в их жизненный уклад так сильно, что стала практически одним целым с их естеством. 
                                    Их набожность настолько может быть прекрасна, насколько и способна иметь ужасающую сторону: 
                                    с одной стороны — помощь сломанным судьбой своим братьям и сёстрам и фанатичная опека над ними, 
                                    но с другой стороны — твердолобость, не способствующая открыться для другого мира, отвергая его и не впуская в свой круг чужих. 
                                    Строгие правила не дают инмарцам взглянуть на всё под другим углом, порой обрекая их самих же на мучения. 
                            </p>
                            
                            <p>
                                <img className={classes.imageHorizontally} src={HumanRace5} alt="HumanRace5" draggable="false"/>
                                    Пустынные люди и регистаны, наоборот, придерживаются открытости и способны к переосмыслению своих же правил. 
                                    Они проповедуют не веру, а скорее мировоззрение — то, что каждое существо в этом мире уникально и достойно уважения. 
                                    А все догматы так или иначе лживы по природе своей, тем самым подвергая сомнениям даже свои учения. 
                                    Большинство из них ищет высшего просветления и осознания единства с миром путём обретения внутреннего покоя через отвержение законов и постулатов. 
                            </p>
                            
                    </div>
                </div>
            </div>

                <img className={classes.sideDecorationRight} src={Palm} alt="Palm" draggable="false"/>
                <img className={classes.sideDecorationLeft} src={Tower} alt="Tower" draggable="false"/>
                
                <button className={classes.transitionButton} onClick={handleFactionsPageTransition}>Главная</button>
        
        </div>
    )
};