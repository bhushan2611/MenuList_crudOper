const express = require('express')
const menuModel = require("../db/menuModel.js")

const createMenu = async(req,res)=>{
    const menu = await menuModel.create(req.body);
    res.json(menu);
};

const findsMenu = async(req,res)=>{
    const findMenu = await menuModel.find();
    if(!findMenu) return res.status(404).send(error);
    res.json(findMenu);
};

const findMenu = async(req,res)=>{
    const id = req.params.id;
    const findMenu = await menuModel.findById(id);
    if(!findMenu) return res.status(404).send(error);
    res.json(findMenu);
};

const updateMenu = async(req,res)=>{
    const id = req.params.id;
    const updateMenu = await menuModel.findByIdAndUpdate(id,req.body)
    if(!updateMenu) return res.status(404).send(error);
    res.json(updateMenu);
};

const deleteMenu = async(req,res)=>{
    const id = req.params.id;
    const deleteMenu = await menuModel.findByIdAndDelete(id)
    if(!deleteMenu) return res.status(404).send(error);
    res.json(deleteMenu);
}

module.exports = {createMenu,findsMenu,findMenu,updateMenu,deleteMenu};