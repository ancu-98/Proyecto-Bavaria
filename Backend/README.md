# Proyecto Bavaria

# Modelos
- Users

# EndPoints

Users Router

api/v1/users
    - getAllUsers
    - postUser

api/v1/users/me
    - getMyUser -> protected
    - patchMyUser -> protected
    - deleteMyUser -> protected

api/v1/users/:id
    - getUserById
    - patchUser -> protected -> role admin
    - deleteUser -> protected -> role admin

Auth Router

api/v1/users/login
    - postLogin

api/v1/users/recovery-password
    - postRecoveryToken
