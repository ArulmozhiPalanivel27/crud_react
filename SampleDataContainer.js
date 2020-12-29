import React from 'react';
import SampleData from '../components/SampleData';

class SampleDataContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="wrapper list-section">
                <SampleData />
            </div>
        );
    }
}
/* 
function mapStateToProps(state) {
    return {
        roles: state.commonReducer.roles
    };
}
 */
export default SampleDataContainer;