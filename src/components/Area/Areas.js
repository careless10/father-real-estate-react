import React, { useState, useEffect } from "react";
import Select from "react-select";
import { getAreas } from "../../base/utilities/apis/browser";

const Areas = props => {
  const [loading, setLoading] = useState(true);
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    setLoading(true);
    getAreas(
      props.selectedType,
      props.selectedGovernorate,
      props.allAreas
    ).then(res => {
      setLoading(false);
      setAreas(res);
    });
  }, [props.selectedGovernorate, props.selectedType]);

  function changed(e) {
    props.selectArea(e);
  }

  return (
    <div>
      <Select
        onChange={changed}
        className="basic-single"
        classNamePrefix="select"
        isLoading={loading}
        isRtl={true}
        isSearchable={true}
        name="area"
        getOptionLabel={option => option.name}
        getOptionValue={option => option}
        options={areas}
      />
    </div>
  );
};

Areas.defaultProps = {
  selectedType: { id: 1 },
  selectedGovernorate: { id: 1 }
};

export default Areas;
