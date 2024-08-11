import Service from "../models/services.model.js";

export const getServicesData = (req, res, next) => {
    Service.findAll()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send({ code: 500, msg: "Internal server error" });
        });
};

export const createServicesData = (req, res, next) => {
    const { title, text, services, url } = req.body;
    Service.create({
        title,
        text,
        services: JSON.stringify(services),
        url,
    })
        .then((success) => res.json({ code: 201, msg: "data created" }))
        .catch((err) => {
            res.json({ code: 500, msg: "internal server error" });
        });
};

export const updateServicesData = (req, res, next) => {
    const { id, title, text, services, url } = req.body;
    Service.findByPk(id).then((data) => {
        data.title = title;
        data.text = text;
        data.services = JSON.stringify(services);
        data.url = url;

        data.save()
            .then((success) => {
                res.json({ code: 202, msg: "Data Updated successfully" });
            })
            .catch((err) => {
                res.json({ code: 500, msg: "internal server error" });
                console.log(err);
            });
    });
};

export const deleteServicesData = (req, res, next) => {
    Service.destroy({ where: { id: req.body.id } })
        .then((success) => {
            res.json({ code: 200, msg: "Data deleted successfully" });
        })
        .catch((err) => {
            res.json({ code: 500, msg: "internal server error" });
        });
};
