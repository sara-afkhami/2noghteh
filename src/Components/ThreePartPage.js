const ThreePartPage = (props) => {
    return(
                  <div className="intro">
                      <div className='col-md-12 intro-text'>
                    <h1>
                      {props.data ? props.data.title : 'Loading'}
                      <span></span>
                    </h1>
                    <div className='space'>
                    <p>{props.data ? props.data.underTitle : 'Loading'}</p>
                    <p>{props.data ? props.data.underTitle : 'Loading'}</p>
                    </div>
                    <div className='space'><p>{props.data ? props.data.paragraph : 'Loading'}</p></div>
                    <img className='space' alt="" src={props.data ? props.data.image : 'Loading'}/>
                    
                  </div>
                  </div>
                
      
    
      );}
      export default ThreePartPage;