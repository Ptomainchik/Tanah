import { useEffect, useState } from "react";
import { HomeButton } from "../../Button/HomeButton/HomeButton";
import { RestartButton } from "../../Button/RestartButton/RestartButton";
import Modal from 'react-modal';
import classes from "../../Styles/BattlefieldsStyles.module.css";
import Phial from "../../../images/Battlefields/DwarfSkils/Phial.jpg"
import AngryDwarf from "../../../images/Battlefields/DwarfSkils/AngryDwarf.jpg"
import FrozenGround from "../../../images/Battlefields/DwarfSkils/Boot.jpg"
import BearHug from "../../../images/Battlefields/DwarfSkils/BearHug.jpg"
import DwarvesBolts from "../../../images/Battlefields/DwarfSkils/Bolt.jpg"
import Poultice from "../../../images/Battlefields/OrcSkils/MedicinalMushroom.jpg"
import ContagiousBite from "../../../images/Battlefields/OrcSkils/OrcBite.jpg"
import Fetters from "../../../images/Battlefields/OrcSkils/Fetters.jpg"
import Ferocity from "../../../images/Battlefields/OrcSkils/OrcFerocity.jpg"
import Log from "../../../images/Battlefields/OrcSkils/Log.jpg"

const randomIntegerFromInterval = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export const OrcsBattlefieldLwl4 = () => {
    const [dwarfHealth, setDwarfHealth] = useState(8000);
    const [orcHealth, setOrcHealth] = useState(8000);
    const [damageMultiplier, setDamageMultiplier] = useState(0);
    const [orcPoultice, setOrcPoultice] = useState(1);
    const [contagiousBite, setContagiousBite] = useState(1);
    const [fetters, setFetters] = useState(1);
    const [orcFerocity, setOrcFerocity] = useState(1);
    const [orcPoulticeImg, setOrcPoulticeImg] = useState(true);
    const [contagiousBiteImg, setContagiousBiteImg] = useState(true);
    const [fettersImg, setFettersImg] = useState(true);
    const [orcFerocityImg, setOrcFerocityImg] = useState(true);
    const [showMessage, setShowMessage] = useState(false);
    const [showMessage2, setShowMessage2] = useState(false);
    const [showMessage3, setShowMessage3] = useState(false);
    const [showMessageSpearThrower, setShowMessageSpearThrower] = useState(true);
    const [showSkilsAngryDwarf, setShowSkilsAngryDwarf] = useState(false);
    const [showSkilsFrozenGround, setShowSkilsFrozenGround] = useState(false);
    const [showBearHug, setShowBearHug] = useState(false);
    const [showDwarvesBolts, setShowDwarvesBolts] = useState(false);
    const [ferocityActive, setFerocityActive] = useState(false);
    const [ferocityCount, setFerocityCount] = useState(0);
    const [spearThrower, setSpearThrower] = useState(3)
    
    
    const ModalRulesOrc = () =>{
        const [modalIsOpen, setModalIsOpen] = useState(false)
        const openModal = () => {
            setModalIsOpen(true)
        };
          
        const closeModal = () => {
            setModalIsOpen(false)
        };
        return (
            <div>
            <button onClick={openModal} className={classes.buttonModalRulesOrc} title="Правила"/>
               <Modal ariaHideApp={false} style={{ overlay: {backgroundColor: 'rgba(4, 27, 1, 0.7)'}, content: {border: '2px solid black' }}}
                   className={classes.modalRulesOrc} isOpen={modalIsOpen}>
                   {Rules}
                   <button className={classes.buttonCloseModalRulesOrc} onClick={closeModal}>Закрыть</button>
               </Modal>
           </div>
        )
    }

    const Rules = (
        <div className={classes.modalRules}>
          <div className={classes.rules}>
            <div className={classes.rule}>
                <img className={classes.imgRules} src={Phial}/>
                <span>Фиал с горной водой - восстанавливает здоровье.</span>
            </div>
            <div className={classes.rule}>
                <img className={classes.imgRules} src={AngryDwarf}/>
                <span>Гнев гнома - увеличивает урон от обычных атак.</span>
            </div>
            <div className={classes.rule}>
                <img className={classes.imgRules} src={FrozenGround}/>
                <span>Мёрзлая земля - даёт неуязвимость к обычным атакам.</span>
            </div>
            <div className={classes.rule}>
            <img className={classes.imgRules} src={BearHug}/>
                <span>Медвежьи объятия - наносит слабый урон противнику в течение некоторого времени.</span>
            </div>
            <div className={classes.rule}> 
                <img className={classes.imgRules} src={DwarvesBolts}/>
                <span>Арбалетные болты - наносят слабый урон противнику, а затем малый урон в течение некоторого времени.</span>
            </div>
            <div className={classes.rule}> 
                <span><h1 className={classes.imgRulesDamageMultiplier}>{damageMultiplier}x</h1>Множитель урона - умножает урон от обычных атак.</span>
            </div>
          </div>
          <div className={classes.rules}>
            <div className={classes.rule}>
                <img className={classes.imgRules} src={Poultice}/>
                <span>Лечебный гриб - восстанавливает здоровье.</span>
            </div>
            <div className={classes.rule}>
                <img className={classes.imgRules} src={ContagiousBite}/>
                <span>Заразный укус - наносит средний урон противнику.</span>
            </div>
            <div className={classes.rule}>
            <img className={classes.imgRules} src={Fetters}/>
                <span>Охотничьи путы - наносит слабый урон противнику в течение 5 секунд.</span>
            </div>
            <div className={classes.rule}> 
                <img className={classes.imgRules} src={Ferocity}/>
                <span>Свирепость орка - увеличивает урон от обычных атак на три раунда.</span>
            </div>
            <div className={classes.rule}> 
                <img className={classes.imgRules} src={Log}/>
                <span>Орочьи колья - наносит слабый урон противнику, а затем малый урон в течение некоторого времени.</span>
            </div>
          </div>
        </div>
    )
      
    const handlePoultice = () => {
        if (orcPoultice === -1) { 
        } 
        else {
            setOrcPoultice(-1)
            setOrcHealth(orcHealth + 100)
            setOrcPoulticeImg(false)
            return
        }
    }
    
    const handleSpearThrower = () => {
        if (spearThrower > 0)  {
            setShowDwarvesBolts(true)
            setSpearThrower(spearThrower - 1)
            setDwarfHealth(dwarfHealth - 100)
            const intervalId1 = setInterval(() => {
                setDwarfHealth(prevHealth => prevHealth - 20)
            }, 1000)
            setTimeout(() => {
                clearInterval(intervalId1)
            }, 3000)
            setOrcHealth(orcHealth - 100)
            const intervalId = setInterval(() => {
                setOrcHealth(prevHealth => prevHealth - 10)
            }, 1000)
            setTimeout(() => {
                clearInterval(intervalId)
                setShowDwarvesBolts(false)
            }, 8000)
        }}

    let buttonClass 
        if (spearThrower === 3) {
            buttonClass = classes.buttonOrcLwlUnic3
        }
        else if (spearThrower === 2) {
            buttonClass = classes.buttonOrcLwlUnic2
        }
        else if (spearThrower === 1) {
            buttonClass = classes.buttonOrcLwlUnic1
        } 
        else if (spearThrower === 0) {
            buttonClass = classes.buttonOrcLwlUnic
        }
    
    const handleContagiousBite = () => {
        if (contagiousBite === -1) { 
        } else {
            setContagiousBite( -1)
            setDwarfHealth(dwarfHealth - 160)
            setContagiousBiteImg(false)
            return
        }
    }

    const handleOrcFerocity = () => {
        if (orcFerocity === -1 || ferocityActive) {
            return
        } else {
            setOrcFerocity(-1)
            setFerocityActive(true)
            setFerocityCount(0);
        }
    }

    const handleFetters = () => {
        if (fetters === -1) { 
        } else {
            setFetters( -1)
        const intervalId = setInterval(() => {
            setDwarfHealth(prevHealth => prevHealth - 80)
        }, 1000)
        setTimeout(() => {
            clearInterval(intervalId)
        }, 5000)
        setFettersImg(false)
    }
    }

    const multiplier = () => {
        setDamageMultiplier(randomIntegerFromInterval(1, 2));
    }
    
    const handleOrcAttack = () => {
        multiplier()
        if (dwarfHealth > 0 && damageMultiplier !== null) {
            if (ferocityActive) {
                setDwarfHealth(dwarfHealth - damageMultiplier * 160);
                setFerocityCount(ferocityCount + 1)
            if (ferocityCount >= 3) {
                    setFerocityActive(false)
                    setOrcFerocityImg(false)
                }
            } 
            else {
                setDwarfHealth(dwarfHealth - damageMultiplier * 80)
            }
            setTimeout(() => {
                setOrcHealth(orcHealth - 80)
            }, 100);
        }

        if (dwarfHealth < 1200 && damageMultiplier !== null) {
            setTimeout(() => {
                setOrcHealth(orcHealth - 160)
            }, 100) 
            setShowSkilsAngryDwarf(true)
        }

        if (dwarfHealth <= 1200 && dwarfHealth >= 1040 && damageMultiplier !== null) {
            setShowMessage3(true)
        } 

        if (dwarfHealth <= 2000 && dwarfHealth >= 1840 && damageMultiplier !== null) {
            setTimeout(() => {
                setDwarfHealth(dwarfHealth + 10)
            }, 100) 
            setShowSkilsFrozenGround(true)
        }
        else if (dwarfHealth <= 1840 && dwarfHealth >= 1300 && damageMultiplier !== null) {
            setShowSkilsFrozenGround(false)    
        }

        if (dwarfHealth <= 3000 && dwarfHealth >= 2680 && damageMultiplier !== null) {
            setShowBearHug(true)
            const intervalId = setInterval(() => {
                setOrcHealth(prevHealth => prevHealth - 80)
            }, 1000);
            setTimeout(() => {
                clearInterval(intervalId)
                setShowBearHug(false)
            }, 5000);
        }

        if (dwarfHealth <= 4000 && dwarfHealth >= 3600 && damageMultiplier !== null) {
            setTimeout(() => {
                setOrcHealth(orcHealth - 80)
            }, 100) 
            setShowSkilsAngryDwarf(true)
        }
        else if (dwarfHealth <= 3600 && dwarfHealth >= 3280 && damageMultiplier !== null) {
            setShowSkilsAngryDwarf(false)
        }

        if (dwarfHealth <= 4000 && dwarfHealth >= 3840 && damageMultiplier !== null) {
            setShowMessage2(true)
        }

        if (dwarfHealth <= 5000 && dwarfHealth >= 4840 && damageMultiplier !== null) {
            setTimeout(() => {
                setDwarfHealth(dwarfHealth + 10)
            }, 100)
            setShowSkilsFrozenGround(true)
        } 
        else if (dwarfHealth <= 4840 && dwarfHealth >= 4300 && damageMultiplier !== null) {
            setShowSkilsFrozenGround(false)
        } 

        if (dwarfHealth <= 6000 && dwarfHealth >= 5680 && damageMultiplier !== null) {
            setShowBearHug(true)
            const intervalId = setInterval(() => {
                setOrcHealth(prevHealth => prevHealth - 80)
            }, 1000);
            setTimeout(() => {
                clearInterval(intervalId)
                setShowBearHug(false)
            }, 5000);
        }
    
        if (dwarfHealth <= 7000 && dwarfHealth >= 6600 && damageMultiplier !== null) {
            setTimeout(() => {
                setOrcHealth(orcHealth - 100)
            }, 100)
            setShowSkilsAngryDwarf(true)
        }
        else if (dwarfHealth <= 6600 && dwarfHealth >= 6280 && damageMultiplier !== null) {
            setShowSkilsAngryDwarf(false)
        } 
        if (dwarfHealth <= 7000 && dwarfHealth >= 6840 && damageMultiplier !== null) {
            setShowMessage(true)
        }  

        if (dwarfHealth > 0 && damageMultiplier !== null) {
          
        }
        if (dwarfHealth < 10){
            window.location.href = "battlefieldorlwl4";
        }
        if (orcHealth < 10){
            window.location.href = "*";
        }   
    };

    useEffect(() => {
        if (showMessage) {
            const timeoutId = setTimeout(() => {
                setShowMessage(false)
            }, 2000);
            return () => clearTimeout(timeoutId)
        }
    }, [showMessage])

    useEffect(() => {
        if (showMessage2) {
            const timeoutId = setTimeout(() => {
                setShowMessage2(false)
            }, 2000)
            return () => clearTimeout(timeoutId)
        }
    }, [showMessage2])
   
    useEffect(() => {
        if (showMessage3) {
            const timeoutId = setTimeout(() => {
                setShowMessage3(false)
            }, 2000)
            return () => clearTimeout(timeoutId)
        }
    }, [showMessage3])

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setShowMessageSpearThrower(false)
        }, 7000);

        return () => clearTimeout(timeoutID)
    }, [showMessageSpearThrower])

    return (
        <div className={classes.orcsBattlefield}>
            <div className={classes.buttonOrcsBattlefield}><HomeButton/><span>Battlefield</span><RestartButton/></div>
            <div className={classes.unitsFlex}>
                <div className={classes.unitsBlock}>
                    <div className={classes.dwarfLwl123}>
                    <progress className={classes.healthIndicatorDwarf} max="8000" value={dwarfHealth} ></progress>
                        <button className={classes.buttonDwarfLwl4} onClick={handleOrcAttack} ></button>
                    </div>
                </div>
                {showMessage && <div className={classes.textMessage}><span>Жалкие орки.</span></div>}
                {showMessage2 && <div className={classes.textMessage}><span>Это было больно.</span></div>}
                {showMessage3 && <div className={classes.textMessage}><span>Я тебя уничтожу!</span></div>}
                {showMessageSpearThrower && <div className={classes.textMessageSpearThrower}><span>Я пришёл на подмогу!</span></div>}
                <div className={classes.unitsBlock}>
                    <div className={classes.orcLwl123}>
                        <progress className={classes.healthIndicatorOrc} max="8000" value={orcHealth} ></progress>
                        <button className={classes.buttonOrcLwl4}></button>
                    </div>
                </div>
            </div>
           
            <button className={buttonClass} onClick={handleSpearThrower} title="Метатель - наносит слабый урон противнику, а затем малый урон в течение некоторого времени." ></button>
            <ModalRulesOrc/>
            <div className={classes.flexSkilsOrcs}>
                <div className={classes.blockSkils}>
                    {orcPoulticeImg && <button className={classes.orcPoultice} onClick={handlePoultice} title="Лечебный гриб - восстанавливает здоровье."></button>}
                    {orcPoulticeImg && <div className={classes.titleSkilsPoultice}>Лечебный гриб</div>}
                </div>
                <div className={classes.blockSkils}>
                    {fettersImg && <button className={classes.fetters} onClick={handleFetters} title="Охотничьи путы - наносит слабый урон противнику в течение 5 секунд."></button>}
                    {fettersImg && <div className={classes.titleSkilsFetters}>Охотничьи путы</div>}
                </div>
                <div className={classes.blockSkils}>
                    {contagiousBiteImg && <button className={classes.contagiousBite} onClick={handleContagiousBite} title="Заразный укус - наносит средний урон противнику."></button>}
                    {contagiousBiteImg &&<div className={classes.titleSkilsContagiousBite}>Заразный укус</div>} 
                </div>
                <div className={classes.blockSkils}>
                    {orcFerocityImg && <button className={classes.orcFerocity} onClick={handleOrcFerocity} disabled={orcFerocity === -1 || ferocityActive} title="Свирепость орка - увеличивает урон от обычных атак на три раунда."></button>}
                    {orcFerocityImg &&<div className={classes.titleSkilsFerocity}>Свирепость орка</div>} 
                </div>
            </div>
            <div className={classes.flexSkilsDwarves}>
                <div className={classes.blockSkils}>
                    {showSkilsAngryDwarf && <button className={classes.angryDwarf} title="Гнев гнома - увеличивает урон от обычных атак."></button>}
                    {showSkilsAngryDwarf && <div className={classes.titleSkilsAngryDwarf}>Гнев гнома</div>}
                </div>
                <div className={classes.blockSkils}>
                    {showSkilsFrozenGround && <button className={classes.frozenGround} title="Мёрзлая земля - даёт неуязвимость к обычным атакам."></button>}
                    {showSkilsFrozenGround && <div className={classes.titleSkilsFrozenGround}>Мёрзлая земля</div>}
                </div>
                <div className={classes.blockSkils}>
                    {showBearHug && <button className={classes.bearHug} title="Медвежьи объятия - наносит слабый урон противнику в течение некоторого времени."></button>}
                    {showBearHug && <div className={classes.titleSkilsBearHug}>Медвежьи объятия</div>}
                </div>
                <div className={classes.blockSkils}>
                    {showDwarvesBolts && <button className={classes.dwarvesBolts} title="Арбалетные болты - наносят слабый урон противнику, а затем малый урон в течение некоторого времени."></button>}
                    {showDwarvesBolts && <div className={classes.titleSkilsDwarvesBolts}>Арбалетные болты</div>}
                </div>
            </div>
            <div className={classes.damageMultiplier}>
                    {damageMultiplier}x
                    <div className={classes.titleSkilsMultiplier}>Множитель урона</div> 
            </div>
        </div>
    );
};