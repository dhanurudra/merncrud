import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [glink, setGlink] = useState("");
  const [llink, setLlink] = useState("");
  const [flink, setFlink] = useState("");
  const [ilink, setIlink] = useState("");
  const [ylink, setYlink] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:7000/users", {
        name,
        desc,
        img,
        glink,
        llink,
        flink,
        ilink,
        ylink,
        email,
        mobile,
        date,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={saveUser}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="Description"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Image</label>
            <div className="control">
              <input
                type="file"
                className="input"
                value={img}
                onChange={(e) => setImg(e.target.value)}
                placeholder="Img"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Google Link</label>
            <div className="control">
              <input
                type="url"
                className="input"
                value={glink}
                onChange={(e) => setGlink(e.target.value)}
                placeholder="Glink"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Linkedin Link</label>
            <div className="control">
              <input
                type="url"
                className="input"
                value={llink}
                onChange={(e) => setLlink(e.target.value)}
                placeholder="Llink"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">FaceBook Link</label>
            <div className="control">
              <input
                type="url"
                className="input"
                value={flink}
                onChange={(e) => setFlink(e.target.value)}
                placeholder="Flink"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Instagram Link</label>
            <div className="control">
              <input
                type="url"
                className="input"
                value={ilink}
                onChange={(e) => setIlink(e.target.value)}
                placeholder="Ilink"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Youtube Link</label>
            <div className="control">
              <input
                type="url"
                className="input"
                value={ylink}
                onChange={(e) => setYlink(e.target.value)}
                placeholder="Ylink"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Mobile</label>
            <div className="control">
              <input
                type="tel"
                id="phone"
                className="input"
                value={mobile}
                // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Mobile"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Added On</label>
            <div className="control">
              <input
                type="time"
                className="input"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Date"
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
