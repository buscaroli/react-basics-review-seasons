

const seasonConfig = {
  winter: {
    text: 'It\'s Winter!',
    iconName: 'snowflake',
    colour: 'blue'
  },
  summer: {
    text: 'It\'s Summer!',
    iconName: 'sun',
    colour: 'orange'
  }
}

const getSeason = (latitude, month) => {
  if (month > 2 && month < 9)
    return latitude > 0 ? 'summer' : 'winter'
  return latitude > 0 ? 'winter' : 'summer'
}


function DisplaySeason(props) {
  const month = new Date().getMonth()
  const season = getSeason(props.latitude, month)

  const {text, iconName, colour} = seasonConfig[season]
  
  return (
    <div className='large segment ui container'>
      <h2 className='ui center aligned large header' style={{color: colour}}>
        <div>
          <i className={`icon ${iconName}`}/> {text} <i className={`icon ${iconName}`}/>
        </div>
        
      </h2>
      
    </div>
  )
  
}


export default DisplaySeason
