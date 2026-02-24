import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";

const EditProfileModal = ({ type, userData, profileData, onSave, onClose }) => {
  const getInitialData = () => {
    if (type === "header") return userData;
    return profileData[type];
  };

  const [formData, setFormData] = useState(getInitialData());

  useEffect(() => {
    setFormData(getInitialData());
  }, [type]);

  /* ================= HEADER ================= */
  const renderHeader = () => (
    <div className="space-y-10">
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Cover Photo</h3>
          <p className="text-sm text-gray-500">
            Add a cover image to personalize your profile.
          </p>
        </div>

        <input
          type="text"
          value={formData.coverPicture}
          onChange={(e) =>
            setFormData({ ...formData, coverPicture: e.target.value })
          }
          placeholder="Paste cover image URL"
          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-blue-500 outline-none transition"
        />
      </section>

      <section className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Profile Information
          </h3>
          <p className="text-sm text-gray-500">
            This information will be visible publicly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {["profilePicture", "name", "title", "company", "location"].map(
            (field) => (
              <input
                key={field}
                type="text"
                value={formData[field]}
                onChange={(e) =>
                  setFormData({ ...formData, [field]: e.target.value })
                }
                placeholder={field}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
            ),
          )}
        </div>
      </section>
    </div>
  );

  /* ================= ABOUT ================= */
  const renderBio = () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">About You</h3>
        <p className="text-sm text-gray-500">
          Write a short professional summary.
        </p>
      </div>

      <textarea
        value={formData}
        onChange={(e) => setFormData(e.target.value)}
        placeholder="Tell something about yourself..."
        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 h-40 resize-none focus:ring-2 focus:ring-blue-500 outline-none transition"
      />
    </div>
  );

  /* ================= SKILLS ================= */
  const renderSkills = () => {
    const handleChange = (index, value) => {
      const updated = [...formData];
      updated[index] = value;
      setFormData(updated);
    };

    const addSkill = () => {
      setFormData([...formData, ""]);
    };

    const removeSkill = (index) => {
      const updated = formData.filter((_, i) => i !== index);
      setFormData(updated);
    };

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Skills</h3>
          <p className="text-sm text-gray-500 mt-1">
            Add skills that highlight your strengths.
          </p>
        </div>

        {/* Skills List */}
        <div className="space-y-3">
          {formData.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-gray-50 hover:bg-gray-100 transition rounded-xl px-4 py-3"
            >
              <input
                type="text"
                value={skill}
                onChange={(e) => handleChange(index, e.target.value)}
                placeholder="Enter skill (e.g. React)"
                className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400"
              />

              <button
                onClick={() => removeSkill(index)}
                className="text-sm font-medium text-red-500 hover:text-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Add Skill Button */}
        <div>
          <button
            onClick={addSkill}
            className="text-blue-600 font-medium hover:text-blue-700 transition"
          >
            + Add another skill
          </button>
        </div>
      </div>
    );
  };

  /* ================= EDUCATION ================= */
  const renderEducation = () => {
    return (
      <div className="space-y-8">
        {/* Section Header */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Education</h3>
          <p className="text-sm text-gray-500 mt-1">
            Add your academic background.
          </p>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              School / University
            </label>
            <input
              type="text"
              value={formData.school}
              onChange={(e) =>
                setFormData({ ...formData, school: e.target.value })
              }
              placeholder="e.g. Osmania University"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Degree</label>
            <input
              type="text"
              value={formData.degree}
              onChange={(e) =>
                setFormData({ ...formData, degree: e.target.value })
              }
              placeholder="e.g. B.Tech"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium text-gray-700">
              Field of Study
            </label>
            <input
              type="text"
              value={formData.field}
              onChange={(e) =>
                setFormData({ ...formData, field: e.target.value })
              }
              placeholder="e.g. Computer Science"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>
        </div>
      </div>
    );
  };

  /* ================= EXPERIENCE ================= */
  const renderExperience = () => {
    const handleChange = (index, field, value) => {
      const updated = [...formData];
      updated[index][field] = value;
      setFormData(updated);
    };

    const addExperience = () => {
      setFormData([
        ...formData,
        { role: "", company: "", duration: "", location: "" },
      ]);
    };

    const removeExperience = (index) => {
      const updated = formData.filter((_, i) => i !== index);
      setFormData(updated);
    };

    return (
      <div className="space-y-8">
        {/* Section Header */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Experience</h3>
            <p className="text-sm text-gray-500 mt-1">
              Add your professional experience.
            </p>
          </div>

          <button
            onClick={addExperience}
            className="text-blue-600 font-medium hover:text-blue-700 transition"
          >
            + Add Experience
          </button>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {formData.map((exp, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 space-y-6 hover:shadow-md transition"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Role
                  </label>
                  <input
                    type="text"
                    value={exp.role}
                    onChange={(e) =>
                      handleChange(index, "role", e.target.value)
                    }
                    placeholder="Frontend Developer"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-blue-500 outline-none transition"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Company
                  </label>
                  <input
                    type="text"
                    value={exp.company}
                    onChange={(e) =>
                      handleChange(index, "company", e.target.value)
                    }
                    placeholder="Infosys"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-blue-500 outline-none transition"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Duration
                  </label>
                  <input
                    type="text"
                    value={exp.duration}
                    onChange={(e) =>
                      handleChange(index, "duration", e.target.value)
                    }
                    placeholder="Jan 2023 - Present"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-blue-500 outline-none transition"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Location
                  </label>
                  <input
                    type="text"
                    value={exp.location}
                    onChange={(e) =>
                      handleChange(index, "location", e.target.value)
                    }
                    placeholder="Hyderabad, India"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-blue-500 outline-none transition"
                  />
                </div>
              </div>

              {/* Remove */}
              <div className="flex justify-end">
                <button
                  onClick={() => removeExperience(index)}
                  className="text-sm text-red-500 hover:text-red-600 font-medium transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  /* ================= RENDER SWITCH ================= */
  const renderContent = () => {
    switch (type) {
      case "header":
        return renderHeader();
      case "bio":
        return renderBio();
      case "skills":
        return renderSkills();
      case "education":
        return renderEducation();
      case "experience":
        return renderExperience();
      default:
        return null;
    }
  };

  const handleSubmit = () => {
    onSave(type, formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden">
        {/* HEADER */}
        <div className="flex items-center justify-between px-8 py-6 bg-gradient-to-r from-gray-50 to-white">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 capitalize">
              Edit {type}
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Update your profile information
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            <IoClose className="text-2xl text-gray-600" />
          </button>
        </div>

        {/* CONTENT */}
        <div className="flex-1 overflow-y-auto px-8 py-6 bg-white">
          {renderContent()}
        </div>

        {/* FOOTER */}
        <div className="flex items-center justify-between px-8 py-5 bg-gray-50">
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 font-medium transition"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded-full font-medium transition shadow-md hover:shadow-lg"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
