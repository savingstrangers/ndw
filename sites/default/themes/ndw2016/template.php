<?php
/**
* Add unique class (mlid) to all menu items.
*/
function current_menu_link(array $variables) {
  $element = $variables['element'];
  $sub_menu = '';

  $element['#attributes']['class'][] = 'menu-' . $element['#original_link']['mlid'];

  if ($element['#below']) {
    $sub_menu = drupal_render($element['#below']);
  }
  $output = l($element['#title'], $element['#href'], $element['#localized_options']);
  return '<li' . drupal_attributes($element['#attributes']) . '>' . $output . $sub_menu . "</li>\n";
}

function current_preprocess_page(&$variables) {
  if (!empty($variables['node'])) {
    $variables['theme_hook_suggestions'][] = 'page__node__' . $variables['node']->type;
  }
}

?>