window.onload = function(){

    class Clock extends React.Component{
        render(){
            setTimeout(() => {
                this.setState(
                {
                    value : Date().split(' ')[4]
                })
            }, 1000);
            return React.createElement('h1', null, Date().split(' ')[4]);
        }
    }

    ReactDOM.render(
        React.createElement(Clock, {
            value : Date().split(' ')[4]
        }),
        document.getElementById('app')
        );

};