
interface worker{
  name: string,
  position: string,
  about: string
}
export const workers: worker[] = [{about: 'Hard Worker?',name:'Phantom Jedi', position: 'Web Developer' }, {about: 'New mac',name:'Vasa Pasa', position: 'Web Developer - Artist' }, {about: 'Shit coins',name:'Anuon', position: 'Backend Developer' }, {about: 'Lets have chas',name:'Gouda', position: 'Marketing - Socials' }]


export function Creators(){
    return(
        <div id="Creators">
            <div className="text-header" style={{paddingTop: '30px', paddingBottom: '20px'}}>
                Our Creators
            </div>
            <div className="creator-grid">
                <div className="creator-info">
                    <img src="/NFTs/4.png" className="creator-logo" alt=""/>
                    <div className="creator-name">{workers[0].name}</div>
                    <div className="pos-text">{workers[0].position}</div>
                    <div className="inside-text">{workers[0].about}</div>
                </div>
                <div className="creator-info">
                    <img src="/NFTs/3.png" className="creator-logo" alt=""/>
                    <div className="creator-name">{workers[1].name}</div>
                    <div className="pos-text">{workers[1].position}</div>
                    <div className="inside-text">{workers[1].about}</div>
                </div>
                <div className="creator-info">
                    <img src="/NFTs/2.png" className="creator-logo" alt=""/>
                    <div className="creator-name">{workers[2].name}</div>
                    <div className="pos-text">{workers[2].position}</div>
                    <div className="inside-text">{workers[2].about}</div>
                </div>
                <div className="creator-info">
                    <img src="/NFTs/6.png" className="creator-logo" alt=""/>
                    <div className="creator-name">{workers[3].name}</div>
                    <div className="pos-text">{workers[3].position}</div>
                    <div className="inside-text">{workers[3].about}</div>
                </div>
            </div>
        </div>
    );
}
