const appError = require("../Utilties/appError");
const catchAsync = require("../Utilties/catchAsync");
const FeaturesAPI = require("../Utilties/features");

const filterObj = (obj, ...allowedFields) => {
  const NewObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) {
      delete obj[el];
    }
  });
  return obj;
};

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findOneAndDelete({ name: req.params.name });

    if (!doc) {
      return next(new appError("No doc found by this ID", 404));
    }
    res.status(204).json({
      status: "success",
      data: null,
    });
  });

exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const filterBody = filterObj(req.body, "name");

    console.log(filterBody, req.params.name);
    // Update the document with new values from the request body
    const doc = await Model.findOneAndUpdate(
      { name: req.params.name },
      filterBody,
      { new: true, runValidators: true }
    );

    if (!doc) {
      return next(new appError("No doc found by this name", 404));
    }
    res.status(201).json({
      status: "success",
      data: {
        doc,
      },
    });
  });

exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);
    if (!doc) {
      return next(new appError("Cannot create this user", 404));
    }
    res.status(201).json({
      status: "success",
      data: {
        doc,
      },
    });
  });

exports.getOne = (Model, popOptions) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    if (popOptions) query = query.populate(popOptions);

    const doc = await query;

    if (!doc) {
      return next(new appError("No doc found by this ID", 404));
    }

    res.status(200).json({
      status: "success",
      data: {
        doc,
      },
    });
  });

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    const feature = new FeaturesAPI(Model.find(), req.query)
      .sorting()
      .filtering()
      .limitingFields();

    const doc = await feature.queryy;

    res.status(200).json({
      status: "success",
      length: doc.length,
      data: {
        doc,
      },
    });
  });
