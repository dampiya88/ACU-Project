-- Create user table (configured auto incrementing id , assumed that the database supports JSON data type
--  user data is stored in JSON format in the userInfo column  (could be normalized to separate tables if needed)
CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userInfo JSON
);

-- SQL Script sort the user data by name (assuming the name key is stored in every row of userInfo column)
SELECT userInfo
FROM user
ORDER BY JSON_EXTRACT(userInfo, '$.name');

--SQL Script to update database
UPDATE user
SET userInfo = jsonb_set(userInfo, '{email}', '"coding@arrowheadcu.org"', false)
WHERE id = 9;

-- SQL Script to filter users by longitude (assuming the lng key is stored in every row of userInfo column)
SELECT *
FROM user
WHERE JSON_EXTRACT(userInfo, '$.address.geo.lng') > -110.455;



