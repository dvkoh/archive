import React from 'react';

class ScrollButton extends React.Component {
  constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      intervalId: 0,
      top: true,
      underline: false,
      display: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll(event) {
    if(this.state.display===false && window.scrollY>0)this.setState({display:true});
    if(this.state.display===true && window.scrollY===0)this.setState({display:false});
  };

  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }
  
  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }

  showButton(){
    if(window.pageYOffset>150){return this.setState({top:true})}
    else this.setState({top:false})
  }
  render () {
    const hoverIn=()=> {if(this.state.underline === false)this.setState({underline:true});}
    const hoverOut=()=> {if(this.state.underline === true)this.setState({underline:false});}

    return (
      <div className={this.state.display? 'transition blue-text clicker':'transition invisible clicker'}>
        <p href='#' className={this.state.underline? 'underline ab-up ml4 roboto-400':'ab-up ml4 roboto-400'} onClick={()=>{this.scrollToTop();}} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>↑</p>
      </div>
    );
  }
} 
export default ScrollButton;