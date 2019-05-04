<?php

use SilverStripe\Admin\ModelAdmin;

/**
 * Description of StudentAdmin
 *
 * @author User
 */
class StudentAdmin extends ModelAdmin {

    private static $managed_models = [
        'User',
        'Quest'
    ];
    private static $url_segment = 'student-quest';
    private static $menu_title = 'Student Quest Admin';

}