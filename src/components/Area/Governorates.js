import React, { useState, useEffect } from "react";
import Select from "react-select";
import { getGovernorates } from "../../base/utilities/apis/realEstate";

const Governorates = props => {
  const [loading, setLoading] = useState(false);
  const [governorates, setGovernorates] = useState([]);

  useEffect(() => {
    setLoading(true);
    getGovernorates(props.selectedType).then(res => {
      setLoading(false);
      setGovernorates(res.data);
    });
  }, [props.selectedType]);

  function changed(e) {
    props.selectGovernorate(e);
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
        name="governorate"
        getOptionLabel={option => option.name}
        getOptionValue={option => option}
        options={governorates}
      />
    </div>
  );
};

export default Governorates;
