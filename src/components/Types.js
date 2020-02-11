import React, { useState, useEffect } from "react";
import Select from "react-select";
import { getAllTypes } from "../base/utilities/apis/sidebar";

const Types = props => {
  const [loading, setLoading] = useState(true);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    setLoading(true);
    getAllTypes().then(res => {
      setLoading(false);
      setTypes(res.data.data);
    });
  }, []);

  function changed(e) {
    props.selectType(e);
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
        name="type"
        getOptionLabel={option => option.name}
        getOptionValue={option => option}
        options={types}
      />
    </div>
  );
};

export default Types;
