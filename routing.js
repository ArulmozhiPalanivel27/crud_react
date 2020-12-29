import React from 'react';
import SampleDataContainer from '../src/database/container/SampleDataContainer';







class routing extends React.Component {
     constructor(props){
          super(props);
     };

render(){
     return(

<BrowseRouter>
<switch>
<Route exact path="/sampledata" component={SampleDataContainer} />



</switch>
</BrowseRouter>
     )
}
}

export  default routing;