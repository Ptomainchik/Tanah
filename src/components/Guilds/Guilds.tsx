import { BlacksmithGuild } from "./BlacksmithGuild/BlacksmithGuild"
import { MerchantsGuild } from "./MerchantsGuild/MerchantsGuild"
import classes from '../Styles/Styles.module.css'

export const Guilds = () => {
    return <div>
        <div className={classes.nad}>
 
 <ol className={classes.list}>
  <p><strong>Гильдия кузнецов:</strong></p>
  <strong>
  <li>Морей Хранитель</li>
  <li>Салгон</li>
  <li>Гаркан</li>
</strong>
 </ol>
 
 <ol className={classes.list1}>
  <p><strong>Гильдия торговцев:</strong></p>
  <strong>
  <li>Бартон Златопалый</li>
  <li>Гарберт</li>
  </strong>
 </ol>
 </div>
 <BlacksmithGuild/>
 <MerchantsGuild/>
</div>

}