import React from "react";
interface cards {
  id: number,
  name:string,
  fields: field[]
}
interface field {
  type: string,
  chance: string,
  rarity: string
}
export const cardsData: cards[] = [{id: 1, name: 'Background', fields: [{type: 'Black',chance: '10%',rarity:'COMMON'}, {type: 'Yellow',chance: '1%',rarity:'LEGENDARY'}, {type: 'Purple',chance: '10%',rarity:'EPIC'}]},
  {id: 2, name: 'Hat', fields: [{type: 'aasdadaa',chance: '10%',rarity:'EPIC'}]} ,
  {id: 3, name: 'Mouth', fields: [{type: 'aaa',chance: '10%',rarity:'RARE'}]}]
export class Rarity extends React.Component{
    data = cardsData;
    // @ts-ignore
    RarityField(props){
        let color = '#404040';
        let border = '4px solid #2e2e2e';
        if (props.field.rarity === 'EPIC'){
            color= '#880f8a'
            border= '4px solid #49084a'
        }
        if (props.field.rarity === 'LEGENDARY'){
            color= '#fcc603'
            border= '4px solid #ba9202'
        }
        if (props.field.rarity === 'RARE'){
            color= 'green'
            border = '4px solid darkgreen'
        }

        return(
            <div className="rarity-field">
                <div className="rarity-text">{props.field.type}</div>
                <div className="rarity-text">{props.field.chance}</div>
                <div className="rarity" style={{backgroundColor: color, border: border}}>{props.field.rarity}</div>
            </div>
        );
    }

    // @ts-ignore
    RarityCard(props){
        return(
            <div className="rarity-card">
                <div className="rarity-header">{props.card.name}</div>
            </div>
        );
    }


    render() {
        return (
            <div style={{paddingTop: '15%'}}>
                <div className="text-header">Rarity Info</div>
                <div className="rarity-grid">
                    {this.data.map((card) => <div>
                        <this.RarityCard key={card.id} card={card}/>
                        {card.fields.map((item) => <this.RarityField key={item.type} field={item} />)}
                    </div>)}
                </div>
            </div>
        );
    }
}
