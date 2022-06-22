import React, { Component } from "react";
import { Print } from "react-easy-print";

class Printwarning extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { skill, company, institution } = this.props;
    console.log(this.props);

    if (skill || company || institution) {
      return (
        <Print printOnly>
          <p className="printWarning">
            This section is empty. You can delete it if you have more than one
            it, or fill in the form if it's the only one.
          </p>
        </Print>
      );
    } else {
      return (
        <Print printOnly>
          <p className="printWarning">
            Section is empty, don't forget to fill in the form
          </p>
        </Print>
      );
    }
  }
}

export default Printwarning;
