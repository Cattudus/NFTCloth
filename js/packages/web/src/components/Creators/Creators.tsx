
interface worker{
  name: string,
  image: string,
  position: string,
  about: string
}
export const workers: worker[] = [{about: 'Hard Worker?', image: '4.png',name:'Cattudus', position: 'Web Developer' }, {about: 'New mac', image: '3.png',name:'Vasa Pasa', position: 'Web Developer - Artist' }, {about: 'Shit coins', image: '3.png',name:'Anuon', position: 'Backend Developer' }, {about: 'Lets have chas', image: '3.png',name:'Gouda', position: 'Marketing - Socials' }]


export function Creators(){
    return(
        <div>
            <div className="text-header" style={{paddingTop: '30px', paddingBottom: '20px'}}>
                Our Creators
            </div>
            <div className="creator-grid">
                <div className="creator-info">
                    <img src="https://lh3.googleusercontent.com/s-z_TCeIbnTcbm-NN3_YXrdMgTux7uHpsxDNu-BF5Y8tYjajGh2cwiMJcVXVSQjFcmWqJGtF5sAdS7-cnfQGVsbyEjENFR3s0lLjVg=w600" className="creator-logo" alt=""/>
                    <div className="creator-name">{workers[0].name}</div>
                    <div className="pos-text">{workers[0].position}</div>
                    <div className="inside-text">{workers[0].about}</div>
                </div>
                <div className="creator-info">
                    <img src="https://lh3.googleusercontent.com/s-z_TCeIbnTcbm-NN3_YXrdMgTux7uHpsxDNu-BF5Y8tYjajGh2cwiMJcVXVSQjFcmWqJGtF5sAdS7-cnfQGVsbyEjENFR3s0lLjVg=w600" className="creator-logo" alt=""/>
                    <div className="creator-name">{workers[1].name}</div>
                    <div className="pos-text">{workers[1].position}</div>
                    <div className="inside-text">{workers[1].about}</div>
                </div>
                <div className="creator-info">
                    <img src="https://lh3.googleusercontent.com/s-z_TCeIbnTcbm-NN3_YXrdMgTux7uHpsxDNu-BF5Y8tYjajGh2cwiMJcVXVSQjFcmWqJGtF5sAdS7-cnfQGVsbyEjENFR3s0lLjVg=w600" className="creator-logo" alt=""/>
                    <div className="creator-name">{workers[2].name}</div>
                    <div className="pos-text">{workers[2].position}</div>
                    <div className="inside-text">{workers[2].about}</div>
                </div>
                <div className="creator-info">
                    <img src="https://lh3.googleusercontent.com/s-z_TCeIbnTcbm-NN3_YXrdMgTux7uHpsxDNu-BF5Y8tYjajGh2cwiMJcVXVSQjFcmWqJGtF5sAdS7-cnfQGVsbyEjENFR3s0lLjVg=w600" className="creator-logo" alt=""/>
                    <div className="creator-name">{workers[3].name}</div>
                    <div className="pos-text">{workers[3].position}</div>
                    <div className="inside-text">{workers[3].about}</div>
                </div>
            </div>
        </div>
    );
}
