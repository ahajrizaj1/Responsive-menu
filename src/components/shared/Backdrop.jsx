

const Backdrop = (prop) => {
  return (
    <div className="backdrop" style={{
        backgroundColor: 'rgba(0,0,0,0.75)',
        zIndex:1,
        height:'100vh',
        width:'100vw',
        position:'absolute',
        top:'0',
        left:'0'
    }} onClick={prop.hideBackdrop}></div>
  )
}

export default Backdrop