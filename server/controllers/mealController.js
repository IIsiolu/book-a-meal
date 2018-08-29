import 'babel-polyfill';
import { Meal } from '../models';
import { checkPagination, paginatedData } from '../helpers/paginate';

/**
 * @class
 */
class MealController {
  /**
   * @summary method to allows caterers to create a meal
   * @param {string} req - request
   * @param {object} res - object response
   * @returns {object} - response to be sent to client
   */
  static createMeal(req, res) {
    const userId = req.user.id;
    const {
      name, description, price, image,
    } = req.body;
    Meal
      .findOrCreate({
        where: { name },
        defaults: {
          description, price, image, userId,
        },
      })
      .spread((meal, created) => {
        // created becomes null if meal is not created
        if (!created) {
          return res.status(409).json({
            success: false,
            message: 'Meal name already exist',
          });
        }
        return res.status(201).json({
          success: true,
          data: meal,
        });
      }).catch((err) => {
        res.status(500).send({
          success: false,
          message: 'failed to create meal',
          err,
        });
      });
  }

  /**
   * All Meals
   * @description method to allow caterers get all meals in Database
   * @param {string} req - request
   * @param {object} res - object response
   * @returns {object} - response to be sent to client
   */
  static allMeals(req, res) {
    // err
    const { page, limit, offset } = checkPagination(req);
    // find and count the total number of items in DB
    Meal
      .findAndCountAll({
        limit,
        offset,
        paranoid: true,
        order: [['id', 'DESC']],
      })
      .then((meal) => {
        if (meal.count === 0) {
          return res.status(404).send({
            success: false,
            message: 'Meal is empty',
          });
        }
        res.status(200).json({
          success: true,
          pagination: paginatedData(page, limit, meal),
          data: meal.rows,
        });
      })
      .catch(() => res.status(500).json('unexpected error'));
  }

  /**
   * @param {string} req
   * @param {object} res
   * @returns {object} res
   */
  static catererMeals(req, res) {
    const { page, limit, offset } = checkPagination(req);
    // find and count the total number of items in DB
    Meal
      .findAndCountAll({
        where: {
          userId: req.user.id,
        },
        limit,
        offset,
        paranoid: true,
        order: [['id', 'DESC']],
      })
      .then((meal) => {
        if (meal.count === 0) {
          return res.status(404).send({
            success: false,
            message: 'Meal is empty',
          });
        }
        res.status(200).json({
          success: true,
          pagination: paginatedData(page, limit, meal),
          data: meal.rows,
        });
      })
      .catch(() => res.status(500).json('unexpected error'));
  }

  /**
   * Edit Meal
   * @description allows caterers to edit a meal
   * @param {string} req - request
   * @param {object} res - object response
   * @returns {object} - response to be sent to client
   */
  static editMeal(req, res) {
    const { mealId } = req.params;

    Meal.findOne({
      where: {
        id: mealId,
      },
    }).then((meal) => {
      const userInfo = Object.assign({}, meal);
      meal.update({ ...userInfo, ...req.body }).then(() => {
        res.status(200).json({
          success: true,
          message: 'updated',
        });
      }).catch(() => res.status(400).json({
        success: false,
        message: 'fail to modify meal, Invalid input',
      }));
    })
      .catch(() => res.status(404).json({
        success: false,
        message: 'No meal with that ID',
      }));
  }

  /**
   * Allow caterers delete Meal
   * @description allows caterers to delete a meals in Database
   * @param {string} req - request
   * @param {object} res - object response
   * @returns {object} - response to be sent to client
   */
  static deleteMeal(req, res) {
    Meal.findOne({
      where: {
        id: req.params.mealId,
      },
    })
      .then((meal) => {
        if (meal) {
          meal.destroy().then(() =>
            res.status(200).json({
              success: true,
              message: 'meal successfully deleted!',
            })).catch(() => {
            res.status(500).send({
              success: false,
              message: 'fail to delete meal',
            });
          });
        } else {
          res.status(404).json({
            success: false,
            message: 'There is no meal with that id!!',
          });
        }
      })
      .catch(() => res.status(400).json({
        success: false,
        message: 'Invalid Parameter In Url',
      }));
  }
}

export default MealController;
