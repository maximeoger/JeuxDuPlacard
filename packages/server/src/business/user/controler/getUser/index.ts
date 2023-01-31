import ControllerInterface from '../../../../technical/controller/controllerInterface';

const getUserController: ControllerInterface = function userGetController(req: any, res: any) {
  res.send(JSON.stringify(req.oidc.user));
  return req.oidc.user;
};

export default getUserController;
