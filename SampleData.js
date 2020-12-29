import React from "react";
import { Link } from "react-router-dom";

class SampleData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      empid: "",
      designaton: "",
      payrate: "",
      address: "",
    };

     this.renderSampleDataRows = this.renderSampleDataRows.bind(this);
   
  }

  renderSampleDataRows(item) {
    var viewUrl = ""; /* replaceIdInPath(routes.emailLog.view, item.id); */

    return (
      <tr key={item.id}>
        <td style={{ textAlign: "center" }}>
          <Link className="clickable-link" to={viewUrl}>
            {" "}
{/*             <p className="datetime">
              {dateFormat(item.firstName  ? item.lastName : "-")}
            </p> */}
          </Link>
        </td>
        <td>
          <div className="tabledatavalue">
            {item.lastName ? item.lastName : "-"}
          </div>
        </td>
        <td className="tabledatavalue">
          {item.empId ? item.empId : "-"}
        </td>
        <td className="tabledatavalue">
          {item.designaton ? item.designaton : "-"}
        </td>
        <td className="tabledatavalue">
          {item.payrate ? item.payrate : "-"}
        </td>
        <td className="tabledatavalue">
          {item.address ? item.address : "-"}
        </td>
      </tr>
    );
  }

  resetFilter() {
    this.setState({
      pageNumber: 1,
      pageSize: 10,
      error: "",
      subject: "",
      sent: "",
      emailSubject: "",
      timeSheetId: "",
      dateCreated: "",
    });
  }

  search() {
    this.setState(
      {
        pageNumber: 1,
      },
      () => {
        this.filterEmailLog();
      }
    );
  }

  onValueChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
/* 
  filterEmailLog() {
    var filter = {
      pageNumber: this.state.pageNumber,
      pageSize: this.state.pageSize,
      error: this.state.error,
      subject: this.state.subject,
      sent: this.state.sent,
      emailSubject: this.state.emailSubject,
      timeSheetId: this.state.timeSheetId,
      dateCreated: this.state.dateCreated,
    };
    this.props.searchEmailLog();
  }
 */
  render() {
    return (
<div className="container">
     <div className= "table">
          <table className = "tableheading">
               <tr>
               <th className="tableheading">FIRSTNAME</th>
                      <th className="tableheading">LASTNAME</th>
                      <th className="tableheading">EMAIL ID</th>
                      <th className="tableheading">DESIGNATION</th>
                      <th className="tableheading">PAYRATE</th>
                      <th className="tableheading">ADDRESS</th>
               </tr>
          </table>
     </div>
</div>


     /*  <div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header" data-background-color="blue">
                <h4 className="title">EMPLOYEE TABLE</h4>
              </div>
              <div className="card-content table-responsive table-section">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th className="tableheading">FIRSTNAME</th>
                      <th className="tableheading">LASTNAME</th>
                      <th className="tableheading">EMAIL ID</th>
                      <th className="tableheading">DESIGNATION</th>
                      <th className="tableheading">PAYRATE</th>
                      <th className="tableheading">ADDRESS</th>
                    </tr>
                  </thead> */
                  /*  <tbody>
                                        {(this.props.emailLogList && this.props.emailLogList.length > 0) ?
                                            this.props.emailLogList.map((item) => {
                                                return this.renderEmailLogRows(item);
                                            }) : <tr><td colSpan="8" style={{ textAlign: "center" }}>NO DATA</td></tr>

                                        }

                                    </tbody> */
             /*    </table>
              </div>
            </div>
          </div>
        </div>
      </div> */
    );
  }
}

export default SampleData;
